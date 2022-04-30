import React, { useReducer } from 'react'

type IncrDecrTypes = {
  type: 'increment' | 'decrement',
  num: number,
  name: string
}

type ResetTypes = {
  type: 'reset'
}

type PropsName = {
  type: 'setName',
  name: string
}

type CounterType = IncrDecrTypes | ResetTypes |PropsName

type StateType = {
  counter: number,
  name: string
}

const initialState = {
  counter: 0,
  name: ''
}


const reducer = (state: StateType, action :CounterType )=> {
  switch(action.type) {
    case 'increment':
    return {...state, counter: state.counter + action.num}
    case 'decrement':
      return {...state, counter: state.counter - action.num}
    case 'setName':
      return {...state, name: action.name}
    case 'reset':
      return initialState
    default: 
    return state
  }
}
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>{state.name} {state.counter}</h2>
      <button type='button' onClick={() => dispatch({type: 'increment', num:  3, name: ''})}>Increment</button>
      <button type='button' onClick={() => dispatch({type: 'decrement', num: 3, name: ''})}>Decrement</button>
      <button type='button' onClick={() => dispatch({type: 'setName', name:  'Shoira'})}>setName</button>
      <button type='button' onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default UseReducer