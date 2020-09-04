import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpotify, faSoundcloud} from '@fortawesome/free-brands-svg-icons'


function Panel({id, name}) {
    const [active, setActive] = useState(false)
    return (
        <div className={`panel panel${id} ${active && "open open-active"}`} onClick={() => setActive(!active)}>
            <p className='panel-desc'>{name}</p>
            <div className='panel-btn-container'>
            <FontAwesomeIcon className='spotify' icon={faSpotify}/>
            <FontAwesomeIcon className='soundcloud' icon={faSoundcloud}/>
            </div>
        </div>
    )
}

export default Panel
