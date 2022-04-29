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
        <li>Name string{props.name}</li>
        <li>Number {props.messageCount}</li>
        <li>Boolean{props.isLoggedIn? "loged in" : "not loged in"}</li>
        <li>Object Fist: {props.personName.first}, Last: {props.personName.last}</li>
        {props.names.map((fullname) => (
        <li>{fullname.first} {fullname.last}</li>

        ))}
        {props.status === "loading"? (<li>Loading</li>) : (<li>Data Fetched</li>) }
      </ul>
      <ChildGreet> Children props</ChildGreet>
    </div>
  )
}

export default Greet