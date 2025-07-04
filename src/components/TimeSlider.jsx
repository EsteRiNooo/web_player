import React from 'react'

const TimeSlider = ({ currentTime, duration, onChange }) => {
  return (
    <input
      type="range"
      min="0"
      max={duration}
      step="0.1"
      value={currentTime}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="w-full"
    />
  )
}

export default TimeSlider
