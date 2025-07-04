import React from 'react'
import VideoPlayer from './components/VideoPlayer'

const App = () => {
  const searchParams = new URLSearchParams(window.location.search)
  const src = searchParams.get('src') || ''

  return (
    <div className="app">
      <VideoPlayer src={src} />
    </div>
  )
}

export default App
