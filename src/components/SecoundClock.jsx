import { useEffect } from 'react'

const SecoundClock = ({ date, color }) => {
  useEffect(() => {
    console.log('secound.jsx - Mount useEffect()')
    return console.log('secoundClock.jsx - didMount useEffect()')
  }, [])

  useEffect(() => {
    console.log('secoundClock.jsx - update useEffect()')
  }, [color])
  const style = {
    color: color ? 'tomato' : 'gray',
  }
  return (
    <>
      <p style={style}>ساعت : {date.toLocaleTimeString()}</p>
    </>
  )
}

export default SecoundClock
