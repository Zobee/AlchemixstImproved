import React, {useState, useEffect} from 'react'

const getRandoColor = () => {
    let color = Math.floor(Math.random()*16777215).toString(16)
    let r = parseInt(color.slice(0, 2), 16)
    let g = parseInt(color.slice(2, 4), 16)
    let b = parseInt(color.slice(4, 6), 16)
    let textColor = (r * 0.299 + g * 0.587 + b * 0.114) > 186
    ? '#000000'
    : '#FFFFFF'
    return {
      bg: `#${color}`, 
      text: textColor,
    }
  }

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
        const {bg, text} = getRandoColor()
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
