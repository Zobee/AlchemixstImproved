import React, {useState, useEffect} from 'react'
import { getRandomColor } from '../helpers'

const Shutters = ({setDoneAnim}) => {
    const [transitionBg, setTransitionBg] = useState('')
    const [transitionText, setTransitionText] = useState("")
    const [isShutTop, setIsShutTop] = useState("")
    const [isShutBot, setIsShutBot] = useState("")
    
    const toggleShut = () => {
        setIsShutTop(prev => {
          return prev === "" ? 'shutter-close-top' : ""
        })
        setIsShutBot(prev => {
          return prev === "" ? 'shutter-close-bottom' : ""
        })
    }

    useEffect(() => {
        const {bg, text} = getRandomColor()
        setTransitionBg(bg)
        setTransitionText(text)
        setTimeout(toggleShut, 300)
        setTimeout(() => setDoneAnim(true), 800)
    },[setDoneAnim])
    return (
        <div>
      		<div className={`shutter shutter-top ${isShutTop}`}
                style={{  
                background: transitionBg,
                backgroundPositionY: "top",
                backgroundSize: "100% 200%",
                color: transitionText
                }}>
            <div className='shutter-bubble-1' style={{backgroundColor: transitionText}}></div>
              ALCHEMIXST
            </div>
            <div className={`shutter shutter-bottom ${isShutBot}`}
                style={{  
                background: transitionBg,
                backgroundPositionY: "bottom",
                backgroundSize: "100% 200%",
                color: transitionText
            }}>
              MUSIC
              <div className='shutter-bubble-2' style={{backgroundColor: transitionText}}></div>
            </div>
          </div>
    )
}

export default Shutters
