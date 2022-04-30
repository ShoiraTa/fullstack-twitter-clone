import React from 'react'
import ComponentPropsLogin from './ComponentPropsLogin'
import {ProfName} from './ComponentPropsProfile'

type PrivateProps = {
  loggedIn: boolean,
  component: React.ComponentType<ProfName>
}
function ComponentPropsPrivate({loggedIn, component: Component}:PrivateProps) {
  if (loggedIn)
  {return (
    <div><Component name = 'Shoira' /></div>
  )}  else { 
    return(
      <ComponentPropsLogin/>
    )
  }
}

export default ComponentPropsPrivate