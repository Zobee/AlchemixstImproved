import React, {useState} from 'react'
import PadDeck from './PadDeck'
import PadControls from './PadControls'

function DrumPad() {
    const [isOn, setIsOn] = useState(false)
    const [volume, setVolume] = useState(100)
    const [activePad, setActivePad] = useState(null)
    return (
    <div className='drumpad'>
        <h1 className='pad-header'>Make Some Noise</h1>
        <div className='pad-container'>
            <PadDeck isOn={isOn} setActivePad={setActivePad} volume={volume}/>
            <PadControls activePad={activePad} setIsOn={setIsOn} volume={volume} setVolume={setVolume}/>
        </div>
    </div>
    )
}

export default DrumPad
