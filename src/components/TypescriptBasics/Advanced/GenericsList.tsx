import React from 'react'

// type ListProps = {
//   items: string[] | number[],
//   onClick: (value: string | number) => void
// }

type ListProps<T> = {
  items: T[],
  onClick: (value: T) => void
}

function GenericsList <T extends {id: number}>({items, onClick} : ListProps<T>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}></div>
        )
      })}
    </div>
  )
}

function List () {
  return (
    <div>
       {/* <GenericsList items= {['Toys', 'Meat', 'Water']} onClick ={(item) => console.log(item)} />
      <GenericsList items= {[1,2,3]} onClick ={(item) => console.log(item)} />  */}
      <GenericsList items= {[{id: 1, name: 'name'}, {id: 2,name: 'name2'}]} onClick ={(item) => console.log(item)} />
    </div>
  )
}

export default GenericsList