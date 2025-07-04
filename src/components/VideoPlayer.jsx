import React, { useRef, useState, useEffect } from 'react'
import Controls from './Controls'
import VolumeSlider from './VolumeSlider'
import TimeSlider from './TimeSlider'
import FullscreenButton from './FullscreenButton'

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleTimeUpdate = () => setCurrentTime(video.currentTime)
      const handleLoadedMetadata = () => setDuration(video.duration)

      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('loadedmetadata', handleLoadedMetadata)

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      }
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (value) => {
    const video = videoRef.current
    video.volume = value
    setVolume(value)
  }

  const handleTimeChange = (value) => {
    const video = videoRef.current
    video.currentTime = value
    setCurrentTime(value)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'f') {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      ref={containerRef}
      className="bg-black bg-opacity-70 p-4 rounded-lg max-w-5xl mx-auto flex flex-col items-center"
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto rounded-md mb-2"
        controls={false}
      />
      <TimeSlider currentTime={currentTime} duration={duration} onChange={handleTimeChange} />
      <div className="flex items-center justify-between w-full mt-2 bg-black/60 p-2 rounded-md">
        <Controls isPlaying={isPlaying} onPlayPause={togglePlay} />
        <VolumeSlider value={volume} onChange={handleVolumeChange} />
        <FullscreenButton isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />
      </div>
    </div>
  )
}

export default VideoPlayer
