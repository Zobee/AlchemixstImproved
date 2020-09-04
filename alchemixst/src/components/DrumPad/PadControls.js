import React from 'react'

function PadControls({setIsOn}) {
    return (
        <div className='pad-controls'>
            PAD CONTROLS
            <label>
                <input
                type='checkbox'
                onChange={() => setIsOn(prev => !prev)}>
                </input>
            </label>
        </div>   
    )
}

export default PadControls
