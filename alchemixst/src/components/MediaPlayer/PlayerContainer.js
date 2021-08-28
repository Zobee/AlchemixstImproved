import React from 'react'
import CurrentlyPlaying from './CurrentlyPlaying'
import TrackSelection from './TrackSelection'

const PlayerContainer = () => {
  return (
    <section className='player-container'>
      <CurrentlyPlaying />
      <TrackSelection />
    </section>
  )
}

export default PlayerContainer
