import React from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck() {
    return (
        <div className='pad-deck'>
            {padData.map(pad => {
            const playback = new Audio(pad.sound)
            return <Pad 
            key={pad.id} 
            pad={pad}
            playback={playback}
            />
        })}
        </div>
    )
}

export default PadDeck
