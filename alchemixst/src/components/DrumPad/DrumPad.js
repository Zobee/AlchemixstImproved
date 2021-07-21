import React, {useState} from 'react'
import PadDeck from './PadDeck'
import PadControls from './PadControls'
import PadHeader from './PadHeader'
import PadBottom from './PadBottom'

function DrumPad() {
    const [isOn, setIsOn] = useState(false)
    const [mute, setMute] = useState(false)
    const [activePad, setActivePad] = useState(null)
    return (
    <div className='drumpad'>
        <PadHeader activePad={activePad}/>
        <div className='pad-container'>
            <PadDeck isOn={isOn} mute={mute} setActivePad={setActivePad}/>
            <PadControls setIsOn={setIsOn} setMute={setMute}/>
        </div>
        <PadBottom activePad={activePad}/>
    </div>
    )
}

export default DrumPad
