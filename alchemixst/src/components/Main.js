import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faInstagram, faSoundcloud, faSpotify} from "@fortawesome/free-brands-svg-icons"
import {CSSTransition} from 'react-transition-group'

function Main() {
    const [rotate, setRotate] = useState(false)
    const [raise, setRaise] = useState("")
    const [hide, setHide] = useState("unhidden")
    const [currTab, setCurrTab] = useState("main")
    return (
        <div className='main'>
            <button onClick={() => {
                        setCurrTab(prev => prev === 'main' ? 'secondary' : "main")
                        setHide(prev => prev === "hidden" ? "unhidden" : "hidden")
                    }}>TAB</button>
            <div>
            <CSSTransition
                in={currTab === 'main'}
                unmountOnExit
                timeout={200}
                classNames='test'>
                <div className={`main-header`}>
                <div className={`header-brand`}>
                    <h1 className={raise}>ALCHEMI<span className={'bounce'}>X</span>ST</h1>
                    {raise ? 
                    <div className={`freq-container raise fade`}>
                                <div className='freq freq1'>
                                </div>
                                <div className='freq freq2'>
                                </div>
                                <div className='freq freq3'>
                                </div>
                                <div className='freq freq4'>
                                </div>
                                <div className='freq freq5'>
                                </div>
                                <div className='freq freq6'>
                                </div>
                            </div> : <h2>Some Catchy Tag</h2>}
                </div>
                <img 
                className={`${rotate && "rotate"}`} 
                onClick={() => {
                    setRotate(prev => !prev)
                    setRaise(prev => prev ? "" : "raise")
                }}
                src={'profile.jpg'} 
                alt='My Mug'/>
                </div>
                </CSSTransition>
            </div>
            <div className='home-content'>
                <div className='news'>

                </div>
                <div className='newest-release'>
                    Counterpoise - OUT NOW
                </div>
            </div>
            <div className='socials'>
                <h5>Socials:</h5>
                <div>
                <FontAwesomeIcon className='icon' icon={faSpotify} 
                onClick={() => window.open("http://www.spotify.com")}/>
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
                <FontAwesomeIcon className='icon' icon={faSoundcloud}/>
                </div>
            </div>
        </div>
    )
}

export default Main
