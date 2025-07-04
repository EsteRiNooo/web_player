import React, { useRef, useState } from 'react'
import Controls from './Controls'
import VolumeSlider from './VolumeSlider'

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)

  const togglePlay = () => {
    const video = videoRef.current
    if (video) {
      if (video.paused) {
        video.play()
        setIsPlaying(true)
      } else {
        video.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleVolumeChange = (value) => {
    const video = videoRef.current
    if (video) {
      video.volume = value
    }
    setVolume(value)
  }

  return (
    <div className="video-container">
      <video ref={videoRef} src={src} width="640" height="360" />
      <Controls isPlaying={isPlaying} onPlayPause={togglePlay} />
      <VolumeSlider value={volume} onChange={handleVolumeChange} />
    </div>
  )
}

export default VideoPlayer
