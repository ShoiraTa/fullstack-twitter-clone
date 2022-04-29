import React from 'react'
type StyleProps  = {
  styles: React.CSSProperties
}
function StyleChild(props:StyleProps ) {
  return (
    <div style={props.styles}>StyleChild</div>
  )
}

export default StyleChild