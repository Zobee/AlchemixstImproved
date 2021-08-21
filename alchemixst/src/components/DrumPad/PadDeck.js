import React from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck({isOn, volume}) {
    return (
        <div className='pad-deck'>
            {padData.map(pad => {
                console.log("loading........")
            const playback = new Audio(pad.sound)
            return <Pad 
            isOn={isOn} 
            key={pad.id} 
            pad={pad}
            volume={volume}
            playback={playback}
            />
        })}
        </div>
    )
}

export default PadDeck
