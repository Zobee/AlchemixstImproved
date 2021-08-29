import React from 'react'
import Track from './Track'

const tracks = [
  {id: 1, name: "5am", duration: '1:52', song:'tracks/5am.mp3'},
  {id: 2, name: "Brioche", duration: '2:28', song:'tracks/Brioche.mp3'},
  {id: 3, name: "Counterpoise", duration: '1:53', song:'tracks/Counterpoise.mp3'},
  {id: 4, name: "Reprieve", duration: '1:30', song:'tracks/Reprieve.mp3'},
  {id: 5, name: "Seismic", duration: '1:42', song:'tracks/Seismic.m4a'}
]

const TrackSelection = () => {
  return (
    <div className='track-container'>
      {tracks.map((track, ind) => {
        const song = new Audio(track.song)
        return <Track key={ind} {...track} song={song} />
      })}
    </div>
  )
}

export default TrackSelection
