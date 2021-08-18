import React, {useState} from 'react'
import PadDeck from './PadDeck'
import PadControls from './PadControls'

function DrumPad() {
    const [isOn, setIsOn] = useState(true)
    const [volume, setVolume] = useState(100)
    const [activePadName, setActivePadName] = useState("")
    return (
    <div className='drumpad'>
        <h1 className='pad-header'>Make Some Noise</h1>
        <div className='pad-container'>
            <PadDeck isOn={isOn} setActivePadName={setActivePadName} volume={volume}/>
            <PadControls isOn={isOn} activePadName={activePadName} setIsOn={setIsOn} volume={volume} setVolume={setVolume}/>
        </div>
    </div>
    )
}

export default DrumPad
