import React, {useEffect, useReducer} from 'react'
import axios from 'axios'

type StateType = {
  error: string,
  data: string,
  loading: boolean
}

type ActionType = {
  type: string,
  payload: string
}

function FetchingWithReducer() {
  const initialState = {
    error: '',
    data: '',
    loading: true
  }

  const reducer = (state: StateType, action:ActionType) => {
    switch(action.type) {
      case 'success': 
      return {
        error: '',
        data: action.payload,
        loading: false
      }
      case 'error': 
      return {
        error: action.payload,
        data: '',
        loading: false
      }
      default:
      return state
    }
  }

  const [state, dispatch ] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => dispatch({type: 'success', payload: res.data}))
    .catch(() => dispatch({type: 'error',payload: 'Something went wrong' }))
  }, [])

  return (
    <div>FetchingWithReducer</div>
  )
}

export default FetchingWithReducer