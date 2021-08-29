import React, {useState, useContext, createContext} from 'react';

const TrackContext = createContext()

export const useTrackContext = () => useContext(TrackContext)

export const TrackProvider = props => {
  const [trackControl, setTrackControl] = useState({playing: false, trackID: null})
  return <TrackContext.Provider value={{trackControl, setTrackControl}}>
    {props.children}
  </TrackContext.Provider>
}