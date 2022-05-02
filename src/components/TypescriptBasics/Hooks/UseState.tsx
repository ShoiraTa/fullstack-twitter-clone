import React, {useState} from 'react'
// for  values  defined in useState you do not have to define the type :)
type AuthUser ={
  name: string,
  email: string
}
function UseState() {
  const [logedIn, setLogedin] = useState('')
  const [user, setUser] = useState<AuthUser | null>(null)
  // const [user, setUser] = useState<AuthUser >({} as AuthUser)

  const handleLogin = () =>{
    setLogedin("true")
    setUser({
      name:'Shoira',
      email: 'email.com'
    })
  }

  const handleLogOut = () =>{
    setLogedin("false")
    setUser(null)
  }

  return (
    <div>
      <button type='button' onClick={handleLogin}> Log In</button>
      <button type='button' onClick={handleLogOut}> Log Out</button>
      <div>User is {logedIn==="true" ? 'Logged in' : 'Logged out'}</div>
      <div>
       <h1> User name: {user?.name}, User email: {user?.email}</h1>
      </div>
    </div>
  )
}

export default UseState