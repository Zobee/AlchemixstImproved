import React from 'react'

function PadControls({activePad, setIsOn, volume, setVolume}) {
    return (
        <div className='pad-controls'>
            <div className='beat-name'>
                {activePad && <h1>{activePad.beatName}</h1>}
            </div>
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
                onChange={() => setVolume(prev => prev ? 0 : 100)}
            />
            <label for='sound-volume'>
                Volume
            </label>
            <input
                type='range'
                name='sound-volume'
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                />
            <p>{volume}</p>
        </div>   
    )
}

export default PadControls
