import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {useTrackContext} from "../context/TrackContext"

function MainHeader({currTab}) {
    const {trackControl} = useTrackContext() 
    const {playing, trackID} = trackControl;
    return (
        <CSSTransition
                in={currTab === 'main'}
                unmountOnExit
                timeout={500}
                classNames='test'>
                <div className={`main-header`}>
                <div className={`header-brand`}>
                    <h1 className={playing ? 'raise' : ''}><span>D</span>OUGH<span>J</span>OE</h1>
                    {playing ? 
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
                    </div> : <h2>Lo-Fi Earworms</h2>}
                </div>
                <img 
                className={`${playing && "rotate"}`}
                src={'profile.jpg'} 
                alt='My Mug'/>
                </div>
                </CSSTransition>
    )
}

export default MainHeader
