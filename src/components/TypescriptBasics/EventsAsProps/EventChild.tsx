import React from 'react'

type ButtonProps = {
  handleClick: () => void,
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}

function EventChild(props: ButtonProps ) {
  const {handleClick, handleInput, value} = props
  return (
    <div>
      <button type='button' onClick={handleClick}>Click me</button>
      <input type='text' value={value} onChange={handleInput}/>
    </div>
  )
}

export default EventChild