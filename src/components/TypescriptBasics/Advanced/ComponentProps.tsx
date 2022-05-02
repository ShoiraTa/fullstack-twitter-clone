import React from 'react'

export type ProfName = {
  name: string
}

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


function ComponentPropsLogin() {
  return (
    <div>
      <ComponentPropsPrivate loggedIn={true} component={ComponentPropsProfile}  />
    </div>
  )
}


function ComponentPropsProfile({name}:ProfName ) {
  return (
    <div>ComponentPropsProfile</div>
  )
}

export default ComponentPropsPrivate