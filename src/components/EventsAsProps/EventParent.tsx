import React,{useState} from 'react'
import EventChild from './EventChild'
function EventParent() {

  const [inputValue, setInputValue] = useState('')
  return (

    <div>
      <EventChild 
        handleClick = {() => { console.log('buttonClick')}}
        handleInput={(e) => {setInputValue(e.target.value)}}
        value={inputValue} />
    </div>
  )
}

export default EventParent