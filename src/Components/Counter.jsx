import { Button,Grid } from '@mui/material';
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
    <Grid container >
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
    <h1>Counter:- {count}</h1>
    </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
    <Grid item>
  <Button variant='contained' onClick={handleInc}>Increment</Button>
  <Button variant='contained' onClick={handleDec}>Deccrement</Button>
  </Grid>
    </Grid>
  )
}


