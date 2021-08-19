import React from 'react'

function PadControls({activePadName, isOn, setIsOn, volume, setVolume}) {
    return (
        <div className='pad-controls'>
            <div className={`beat-name ${isOn ? "beat-name-active" : ""}`}>
                {activePadName && <h1>{activePadName}</h1>}
            </div>
            <h1>PAD CONTROLS</h1>
            <label htmlFor='power'>
                POWER
            </label>
            <input
                type='checkbox'
                name='power'
                onChange={() => setIsOn(prev => !prev)}
            />
            <label htmlFor='mute'>
                MUTE
            </label>
            <input
                type='checkbox'
                name='mute'
                disabled={!isOn}
                onChange={(e) => setVolume(e.target.checked ? 0 : 100)}
            />
            <label htmlFor='sound-volume'>
                Volume
            </label>
            <input
                type='range'
                name='sound-volume'
                min="0"
                max="100"
                value={volume}
                disabled={!isOn}
                onChange={(e) => setVolume(e.target.value)}
                />
            <p className='volume-display'>{volume}</p>
        </div>   
    )
}

export default PadControls
