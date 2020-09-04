import React, {useState} from 'react'

import MainBtn from './MainBtn'
import MainHeader from './MainHeader'
import PanelContainer from './PanelContainer'
import MainAbout from './MainAbout'

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
            <PanelContainer/>
        </div>
    )
}

export default Main
