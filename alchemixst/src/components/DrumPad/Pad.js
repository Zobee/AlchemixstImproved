import React, {useState, useEffect} from 'react'

function Pad({isOn, pad, setActivePadName, volume}) {
    const {id, keyInput, beatName, sound} = pad;
    const [isDown, setIsDown] = useState("");

    const play = (aud) => {
        setIsDown("down")
        setActivePadName(beatName)
        const playback = new Audio(aud)
        playback.currentTime = 0
        playback.volume = volume / 100
        playback.play();
        playback.remove();
        setTimeout(() => {
            setIsDown("")
            setActivePadName("")
        }, 300)
    }    

    const keyPress = (e) => {
        if(isOn && e.key.toUpperCase() === keyInput){
            play(sound)
        } 
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
    return () => {
        document.removeEventListener('keydown', keyPress)
    }
    },[keyPress])
    return (
        <div className={`pad ${isOn ? `pad${id}` : 'off'} ${isDown}`} onClick={() => isOn && play(sound)}>
            <p>{keyInput}</p>
            <p>{beatName}</p>
        </div>
    )
}

export default Pad
