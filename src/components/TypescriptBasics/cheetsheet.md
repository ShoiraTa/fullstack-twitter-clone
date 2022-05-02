## Component prop type:

`type ComponentProp = { Component: React.ComponentType }`

## Stypes prop type

`type StyleProps = { styles: React.CSSProperties }`

## Array of objects prop type

`type GreetProps={ names:{first:string,last:string }[] }`

## Component as props

> IF you have to pass in a component prop use:

- `type PrivateProps = { component: React.ComponentType }`
  > IF that component itself accepts props then use
- `type PrivateProps = { component: React.ComponentType<ImportedProfName> }`

## Literal types

`type Direction = { 'left' | 'right'`}

## Array of Strings or Numbers

`type ListProps = { items: string[] | number[]}`

## Generic Props

`type ListProps<T> = { items: T[], onClick: (value: T) => void }`
`function GenericsList <T extends {}>({items, onClick} : ListProps<T>){}`
