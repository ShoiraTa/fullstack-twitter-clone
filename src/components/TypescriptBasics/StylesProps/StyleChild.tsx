import React from 'react'
type StyleProps  = {
  styles: React.CSSProperties
}
function StyleChild({styles}:StyleProps ) {
  return (
    <div style={styles}>StyleChild</div>
  )
}

export default StyleChild