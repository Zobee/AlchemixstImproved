import React, {useState} from 'react'
import {FiPlay, FiPause} from 'react-icons/fi'

const Track = ({id, name, duration}) => {
  const [hover, setHover] = useState(false)
  return (
    <div className='track' onMouseEnter={() => setHover(prev => !hover)} onMouseLeave={() => setHover(prev => !hover)}>
      <p className='track-num'>{hover ? <FiPlay/> :id}</p>
      <p>{name}</p>
      <p>{duration}</p>
    </div>
  )
}

export default Track
