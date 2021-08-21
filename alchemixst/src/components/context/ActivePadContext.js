import React, {useState, useContext, createContext} from 'react';

const ActivePadContext = createContext()

export const useActivePadContext = () => useContext(ActivePadContext)

export const ActivePadProvider = props => {
  const [padControl, setPadControl] = useState({isOn: true, beatName: "", volume: 100})
  return <ActivePadContext.Provider value={{padControl, setPadControl}}>
    {props.children}
  </ActivePadContext.Provider>
}