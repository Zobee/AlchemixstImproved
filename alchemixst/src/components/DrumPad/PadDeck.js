import React from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck({isOn, setActivePad, volume}) {
    return (
        <div className='pad-deck'>
            {padData.map(pad => <Pad 
            isOn={isOn} 
            key={pad.id} 
            pad={pad}
            volume={volume}
            setActivePad={setActivePad}
            />)}
        </div>
    )
}

export default PadDeck
