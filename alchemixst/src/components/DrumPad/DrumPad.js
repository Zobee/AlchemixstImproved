import React, {useState} from 'react'
import PadDeck from './PadDeck'
import PadControls from './PadControls'
import PadHeader from './PadHeader'
import PadBottom from './PadBottom'

function DrumPad() {
    const [isOn, setIsOn] = useState(false)
    return (
        <div className='drumpad'>
            <PadHeader/>
            <div className='pad-container'>
                <PadDeck isOn={isOn}/>
                <PadControls setIsOn={setIsOn}/>
            </div>
            <PadBottom/>
        </div>
    )
}

export default DrumPad
