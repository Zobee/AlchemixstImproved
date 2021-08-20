import React, {useState, useEffect} from 'react'
import {playSound} from '../../helpers'

function Pad({isOn, pad, setActivePadName, volume}) {
    const {id, keyInput, beatName, sound} = pad;
    const [isDown, setIsDown] = useState("");
    const [playback] = useState(() => new Audio(sound))

    const play = (playback) => {
        setIsDown("down")
        setActivePadName(beatName)
        playSound(playback, volume)
        setTimeout(() => {
            setIsDown("")
            setActivePadName("")
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
