import React from 'react'
import Track from './Track'

const tracks = [
  {id: 1, name: "Counterpoise", duration: '0:58'},
  {id: 2, name: "QPQT", duration: '1:16'},
  {id: 3, name: "Florina", duration: '2:14'},
  {id: 4, name: "Portable", duration: '0:33'},
  {id: 5, name: "Orchestra", duration: '0:41'},
  {id: 6, name: "Chortle", duration: '2:06'},
  {id: 7, name: "Windego", duration: '0:51'},
  {id: 8, name: "Falling", duration: '1:11'}
]

const TrackSelection = () => {
  return (
    <div className='track-container'>
      {tracks.map((track, ind) => <Track key={ind} {...track} />)}
    </div>
  )
}

export default TrackSelection
