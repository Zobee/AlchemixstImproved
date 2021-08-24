import React, {useState} from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck() {
    const [trigger, setTrigger] = useState("")
    const delay = (key, ind) => {
        setTimeout(() => {
            setTrigger(key)
        },[25 * (ind + 1)])
    }
    const autoPlay = () => {
        const pattern = ["X", "E", "D", "E", "X", "E", "D", "E"];

        for (let ind in pattern) {
            delay(pattern[ind], ind)
        }
    }
    return (
        <div className='pad-deck'>
            {padData.map(pad => {
            const playback = new Audio(pad.sound)
            return <Pad 
            key={pad.id} 
            pad={pad}
            playback={playback}
            trigger={trigger}
            />
        })}
        <button className='autodrum-btn' onClick={autoPlay}>Auto Drum</button>
        </div>
    )
}

export default PadDeck
