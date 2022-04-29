import ChildGreet from "./ChildGreet"

// ? means prop is optional

type GreetProps={
  name?:string,
  messageCount: number,
  isLoggedIn: boolean,
  personName: {
    first:string,
    last:string,
  },
  names:{first:string,
        last:string }[],
  status: 'loading' | 'success' | 'error'
}

const Greet = (props:GreetProps) => {
  // Default value if prop is missing
  const {messageCount = 0} = props
   return(
    <div>
      <ul>
        <li key={props.name}>Name string{props.name}</li>
        <li  key={props.messageCount}>Number {props.messageCount}</li>
        <li  key='1'>Boolean{props.isLoggedIn? "loged in" : "not loged in"}</li>
        <li key={props.personName.first}>Object Fist: {props.personName.first}, Last: {props.personName.last}</li>
        {props.names.map((fullname, i) => (
        <li key={i}>{fullname.first} {fullname.last}</li>

        ))}
        {props.status === "loading"? (<li key='2'>Loading</li>) : (<li key='3' >Data Fetched</li>) }
      </ul>
      <ChildGreet> Children props</ChildGreet>
    </div>
  )
}

export default Greet