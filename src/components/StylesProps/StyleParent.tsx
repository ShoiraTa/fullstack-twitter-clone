import React from 'react'
import StyleChild from './StyleChild'
function StyleParent() {
  return (
    <div>
      <StyleChild styles={{color: "blue"}}/>
    </div>
  )
}

export default StyleParent