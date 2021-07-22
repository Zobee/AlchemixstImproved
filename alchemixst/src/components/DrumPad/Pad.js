import React, {useState, useEffect} from 'react'

function Pad({isOn, pad, mute, setActivePad}) {
    const {id, keyInput, beatName, sound} = pad;
    const [isDown, setIsDown] = useState("");

    const play = (aud) => {
        setIsDown("down")
        setActivePad(pad)
        const playback = new Audio(aud)
        playback.currentTime = 0
        playback.volume = mute ? 0 : 1
        playback.play();
        playback.remove();
        setTimeout(() => {
            setIsDown("")
            setActivePad(null)
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
        <div className={`pad ${isOn ? `pad${id}` : 'off'} ${isDown}`} onClick={() => play(sound)}>
            <p>{keyInput}</p>
            <p>{beatName}</p>
        </div>
    )
}

export default Pad
