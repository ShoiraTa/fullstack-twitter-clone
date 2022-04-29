import React from 'react'
type ChildrenProps = {
  children: string
}
function ChildGreet(props: ChildrenProps) {
  return (
    <div>{props.children}</div>
  )
}

export default ChildGreet