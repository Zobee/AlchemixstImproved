import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faSoundcloud, faSpotify} from "@fortawesome/free-brands-svg-icons"
import {CSSTransition} from 'react-transition-group'

function MainAbout({currTab}) {
    return (
        <CSSTransition
                in={currTab !== 'main'}
                unmountOnExit
                timeout={500}
                classNames='test'>
                <div className={`main-header`}>
                    <div className='about-container'>
                    <h2>What's up?</h2>
                    <p>Doughiest Beats this side of the GTA.</p>
                    </div>
                    <div className='socials'>
                <h5>Socials:</h5>
                <div>
                <FontAwesomeIcon className='icon spotify' icon={faSpotify}/>
                <FontAwesomeIcon className='icon instagram' icon={faInstagram}
                onClick={() => window.open("https://www.instagram.com/dough_joe_beats/")}/>
                <FontAwesomeIcon className='icon soundcloud' icon={faSoundcloud}/>
                </div>
            </div>
                </div>
        </CSSTransition>
    )
}

export default MainAbout
