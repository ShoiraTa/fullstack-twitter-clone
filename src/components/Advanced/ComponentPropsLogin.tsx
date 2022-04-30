import React from 'react'
import ComponentPropsPrivate from './ComponentPropsPrivate'
import ComponentPropsProfile from './ComponentPropsProfile'

function ComponentPropsLogin() {
  return (
    <div>
      <ComponentPropsPrivate loggedIn={true} component={ComponentPropsProfile}  />
    </div>
  )
}

export default ComponentPropsLogin