import React, {useState, useEffect} from 'react'
import {playSound} from '../../helpers'
import {useActivePadContext} from '../context/ActivePadContext'
function Pad({pad, playback}) {
    const {padControl, setPadControl} = useActivePadContext()
    const {isOn, volume} = padControl;
    const {id, keyInput, beatName} = pad;
    const [isDown, setIsDown] = useState("");
    const play = (playback) => {
        setIsDown("down")
        setPadControl(prev => ({ ...prev, beatName}));
        playSound(playback, volume)
        setTimeout(() => {
            setIsDown("")
            setPadControl(prev => ({ ...prev, beatName: ""}))
        }, 300)
    }    

    const keyPress = (e) => {
        if(isOn && e.key.toUpperCase() === keyInput){
            play(playback)
        } 
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        
    return () => {
        document.removeEventListener('keydown', keyPress)
    }
    },[keyPress])
    return (
        <div className={`pad ${isOn ? `pad${id}` : 'off'} ${isDown}`} onClick={() => isOn && play(playback)}>
            <p>{keyInput}</p>
            <p>{beatName}</p>
        </div>
    )
}

export default Pad
