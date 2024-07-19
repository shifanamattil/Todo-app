import React from 'react'
import Child from './Child1'

function Props() {
    const result="this is an example of props"
  return (
    
    <div>
        <Child message={result}/>


    </div>
  )
}
export default Props

