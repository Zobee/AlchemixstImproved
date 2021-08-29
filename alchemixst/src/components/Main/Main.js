import React, {useState} from 'react'
import {TrackProvider} from '../context/TrackContext'

import MainBtn from './MainBtn'
import MainHeader from './MainHeader'
import MainAbout from './MainAbout'
import PlayerContainer from '../MediaPlayer/PlayerContainer'


function Main() {
    const [currTab, setCurrTab] = useState("main")
    return (
        <TrackProvider>
            <div className='main'>
                <MainBtn currTab={currTab} setCurrTab={setCurrTab}/>
                <div>
                    <div className='header-container'>
                        <MainHeader currTab={currTab} />
                        <MainAbout currTab={currTab} />
                    </div>
                </div>
            <PlayerContainer />
            </div>
        </TrackProvider>
    )
}

export default Main
