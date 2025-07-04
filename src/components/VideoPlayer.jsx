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
    const container = containerRef.current
    if (!document.fullscreenElement && container) {
      container.requestFullscreen()
      setIsFullscreen(true)
    } else if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'f') {
        if (document.fullscreenElement) {
          document.exitFullscreen()
          setIsFullscreen(false)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${
        isFullscreen
          ? 'fixed top-0 left-0 w-screen h-screen z-50 bg-black flex flex-col justify-center items-center'
          : 'max-w-5xl mx-auto bg-black bg-opacity-70 p-4 rounded-lg flex flex-col items-center justify-center'
      }`}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <video
          ref={videoRef}
          src={src}
          className={`${
            isFullscreen ? 'w-full h-full object-contain' : 'w-full h-auto'
          } rounded-md mb-2`}
          controls={false}
        />
        {!isFullscreen && (
          <TimeSlider
            currentTime={currentTime}
            duration={duration}
            onChange={handleTimeChange}
          />
        )}
        <div className="flex items-center justify-between w-full mt-2 bg-black/60 p-2 rounded-md">
          <Controls isPlaying={isPlaying} onPlayPause={togglePlay} />
          <VolumeSlider value={volume} onChange={handleVolumeChange} />
          <FullscreenButton isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
