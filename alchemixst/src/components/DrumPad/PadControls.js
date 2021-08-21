import React from 'react'
import {useActivePadContext} from '../context/ActivePadContext'

function PadControls() {
    const {padControl, setPadControl} = useActivePadContext()
    const {isOn, volume} = padControl;

    const handleMute = e => {
        const mute = e.target.checked ? 0 : 100
        setPadControl(prev => ({...prev, volume: mute}))
    }

    const handleVolume = e => {
        const volume = e.target.value
        setPadControl(prev => ({...prev, volume}))
    }

    return (
        <div className='pad-controls'>
            <div className={`beat-name ${isOn ? "beat-name-active" : ""}`}>
                {padControl && <h1>{padControl.beatName}</h1>}
            </div>
            <h1>PAD CONTROLS</h1>
            <label htmlFor='power'>
                POWER
            </label>
            <input
                type='checkbox'
                name='power'
                checked={() => setPadControl(prev => ({...prev, isOn: true}))}
                onChange={() => setPadControl(prev => ({...prev, isOn: !prev.isOn}))}
            />
            <label htmlFor='mute'>
                MUTE
            </label>
            <input
                type='checkbox'
                name='mute'
                disabled={!isOn}
                onChange={handleMute}
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
                onChange={handleVolume}
                />
            <p className='volume-display'>{volume}</p>
        </div>   
    )
}

export default PadControls
