import React, {useRef, useEffect, useState} from 'react'

function RefDom() {
  const inputRef= useRef<HTMLInputElement>(null!)
  const intervalRef = useRef<number | null>(null!)

  const [timer, setTimer] = useState(0)
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current)
  }
  useEffect(()=>  {
    inputRef.current.focus()
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer+1)
    }, 1000)
    return () => {
      stopTimer()
    }

  }, [])


  return (
    <div>
      <input type='text' ref= {inputRef}/>
      <button type='button' onClick={() => stopTimer()}>Stop timer</button>
    </div>
  )
}

export default RefDom