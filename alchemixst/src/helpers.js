export const getRandomColor = () => {
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

export const playSound = (playback, volume=100) => {
  playback.currentTime = 0
  playback.volume = volume / 100
  playback.play();
  playback.remove()
}

export const endPlay = (playback) => {
  playback.pause()
  playback.remove()
}