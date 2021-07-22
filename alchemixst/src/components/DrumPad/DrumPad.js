import React, {useState} from 'react'
import PadDeck from './PadDeck'
import PadControls from './PadControls'
import PadHeader from './PadHeader'
import PadBottom from './PadBottom'

function DrumPad() {
    const [isOn, setIsOn] = useState(false)
    const [volume, setVolume] = useState(100)
    const [activePad, setActivePad] = useState(null)
    return (
    <div className='drumpad'>
        <PadHeader activePad={activePad}/>
        <div className='pad-container'>
            <PadDeck isOn={isOn} setActivePad={setActivePad} volume={volume}/>
            <PadControls activePad={activePad} setIsOn={setIsOn} volume={volume} setVolume={setVolume}/>
        </div>
        <PadBottom activePad={activePad}/>
    </div>
    )
}

export default DrumPad
