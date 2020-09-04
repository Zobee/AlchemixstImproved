import React, {useState} from 'react'
import {CSSTransition} from 'react-transition-group'

function MainHeader({currTab}) {
    const [rotate, setRotate] = useState(false)
    const [raise, setRaise] = useState("")
    return (
        <CSSTransition
                in={currTab === 'main'}
                unmountOnExit
                timeout={500}
                classNames='test'>
                <div className={`main-header`}>
                <div className={`header-brand`}>
                    <h1 className={raise}>ALCHEMI<span>X</span>ST</h1>
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
                                <div className='freq freq7'>
                                </div>
                                <div className='freq freq8'>
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
    )
}

export default MainHeader
