import React from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck({isOn, mute, setActivePad}) {
    return (
        <div className='pad-deck'>
            {padData.map(pad => <Pad 
            isOn={isOn} 
            mute={mute} 
            key={pad.id} 
            pad={pad}
            setActivePad={setActivePad}
            />)}
        </div>
    )
}

export default PadDeck
