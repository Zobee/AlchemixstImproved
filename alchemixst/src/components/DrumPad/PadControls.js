import React from 'react'

function PadControls({setIsOn, setMute}) {
    return (
        <div className='pad-controls'>
            <h1>PAD CONTROLS</h1>
            <label for='power'>
                POWER
            </label>
            <input
                type='checkbox'
                name='power'
                onChange={() => setIsOn(prev => !prev)}
            />
            <label for='mute'>
                MUTE
            </label>
            <input
                type='checkbox'
                name='mute'
                onChange={() => setMute(prev => !prev)}
            />
        </div>   
    )
}

export default PadControls
