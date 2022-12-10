import { Button } from '@mui/material';
import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount] = useState(0);

const handleInc=()=>{
  setCount(count+5)
}    
const handleDec=()=>{
setCount(count-3)
}
  return (
    <div>
    <h1>Counter:- {count}</h1>

  <button onClick={handleInc}>Increment</button>
  <button onClick={handleDec}>Deccrement</button>
    </div>
  )
}


