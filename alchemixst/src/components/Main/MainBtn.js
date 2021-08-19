import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

function MainBtn({currTab, setCurrTab}) {
    return (
        <button aria-label='click to flip' className='main-btn' onClick={() => {
            setCurrTab(prev => prev === 'main' ? 'secondary' : "main")
        }}><FontAwesomeIcon icon={currTab==='main' ? faChevronCircleLeft : faChevronCircleRight}/>
        </button>
    )
}

export default MainBtn
