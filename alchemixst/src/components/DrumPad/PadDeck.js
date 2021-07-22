import React from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck({isOn, setActivePadName, volume}) {
    return (
        <div className='pad-deck'>
            {padData.map(pad => <Pad 
            isOn={isOn} 
            key={pad.id} 
            pad={pad}
            volume={volume}
            setActivePadName={setActivePadName}
            />)}
        </div>
    )
}

export default PadDeck
