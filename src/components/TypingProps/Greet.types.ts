type  PersonName ={
    first:string,
    last:string,
  }

export type GreetProps={
  // ? means prop is optional
  name?:string,
  messageCount: number,
  isLoggedIn: boolean,
  personName: PersonName,
  names:{first:string,
        last:string }[],
  status: 'loading' | 'success' | 'error'
}
