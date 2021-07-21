import React from 'react'

function PadHeader({activePad}) {
    return (
        <div className='pad-header'>
            {activePad ? activePad.beatName : "Make Some Noise"}
        </div>
    )
}

export default PadHeader
