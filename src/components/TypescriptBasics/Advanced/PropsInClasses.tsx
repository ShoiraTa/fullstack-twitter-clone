import React, { Component } from 'react'

type Props = {
  message: string;
}
type CounterState = {
  count: number;
}
export class PropsInClasses extends Component<Props,CounterState> {
  contsructor ()  {
    this.state = {
      count: 0
    }
  }

   increment = () =>{
    this.setState((prevState) => ({count: prevState.count+1}))
  }
   decrement =()=>{
    this.setState((prevState) => ({count: prevState.count-1}))
  }
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
        <button type='button' onClick={this.increment}>Increment</button>
        <button type='button' onClick={this.decrement}>Increment</button>
      </div>
    )
  }
}

export default PropsInClasses