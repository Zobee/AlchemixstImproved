import React, {useState} from 'react'

import MainBtn from './MainBtn'
import MainHeader from './MainHeader'
import MainAbout from './MainAbout'
import PlayerContainer from '../MediaPlayer/PlayerContainer'

function Main() {
    const [currTab, setCurrTab] = useState("main")
    return (
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
    )
}

export default Main
