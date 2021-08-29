import React, {useState, useEffect} from 'react'
import {FiPlay, FiPause} from 'react-icons/fi'
import {useTrackContext} from "../context/TrackContext"
import {playSound, endPlay} from '../../helpers'

const Track = ({id, name, duration, song}) => {
  const [hover, setHover] = useState(false)
  const {trackControl, setTrackControl} = useTrackContext()
  const {playing, trackID} = trackControl;

  //Function to control pad
  const playTrack = (playing, trackID) => {
    //If no track is playing, set the clicked track to 'playing' and set ID to the track's ID
    if( !playing ) {
      setTrackControl(prev => ({...prev, playing: true, trackID}))
      playSound(song)
      return;
    } else if ( trackID === trackControl.trackID ) {
      setTrackControl(prev => ({...prev, playing: false, trackID: null}))
      endPlay(song)
    } else {
      setTrackControl(prev => ({...prev, trackID}))
      playSound(song)
    }
    //If a track is playing, and you click on a different track, the previous track stops, and a new track starts playing
  }

  const trackEnd = () => setTrackControl(prev => ({...prev, playing: false, trackID: null}))

  //When a track completes, playing should be set to false and ID set to null
  useEffect(() => {
    document.addEventListener('ended', trackEnd)
    return () => document.removeEventListener('ended', trackEnd)
  })
    
  return (
    <div className='track' 
    onMouseEnter={() => setHover(prev => !prev)} 
    onMouseLeave={() => setHover(prev => !prev)}
    onClick={() => playTrack(playing, id)}>
      <p className='track-num'>{hover ? playing && trackID === id ? <FiPause /> : <FiPlay/> : id}</p>
      <p>{name}</p>
      <p>{duration}</p>
    </div>
  )
}

export default Track
