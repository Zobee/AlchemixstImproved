import React from 'react'
import PadDeck from './PadDeck'
import PadControls from './PadControls'
import {ActivePadProvider} from '../context/ActivePadContext'

function DrumPad() {
    return (
    <div className='drumpad'>
        <h1 className='pad-header'>Make Some Noise</h1>
        <ActivePadProvider>
            <div className='pad-container'>
                <PadDeck/>
                <PadControls/>
            </div>
        </ActivePadProvider>
    </div>
    )
}

export default DrumPad
