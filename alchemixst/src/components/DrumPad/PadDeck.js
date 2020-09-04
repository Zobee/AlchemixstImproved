import React, {useState, useEffect} from 'react'
import Pad from './Pad'
import padData from './padData'
function PadDeck({isOn}) {
    return (
        <div className='pad-deck'>
            {
                padData.map(pad => {
                    return <Pad isOn={isOn} key={pad.id} pad={pad}/>
                })
            }
        </div>
    )
}

export default PadDeck
