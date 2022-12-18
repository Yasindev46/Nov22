import { TextField, Grid, Button,Card } from "@mui/material";
import React from "react";
import { useState } from "react";
import ManIcon from '@mui/icons-material/Man';
import WomanIcon from '@mui/icons-material/Woman';

export const Turnary = () => {
    const [text,setText]=useState("")
    const [display,setDisplay]=useState("Other")
    const [color,setColor]=useState("blue")

    const[isLogin,setIsLogin]=useState(false)

    const handleShow=()=>{
        setDisplay(text)
        {if(text=="male") {
            setColor("red")
          }else if(text=="female"){
            setColor("green")
          }else{
            setColor("yellow")
          } }
    }


  return (
    <div>
      <h1>Turnary Operator</h1>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField variant="outlined" onChange={(e)=>setText(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" onClick={handleShow}>Show</Button>
        </Grid>
        <Grid item xs={2}>
          <Card><h3>{display}</h3></Card>
        </Grid>
        <Grid item xs={2}>
          {display=="male" ?< ManIcon style={{width:"80px",height:"80px"}}/>:<WomanIcon style={{width:"80px",height:"80px"}}/>}
        </Grid>
        <Grid item xs={2}>
        < Card style={{width:"80px",height:"80px",backgroundColor:color}}/>
        </Grid>
      </Grid>

      <Grid container spacing={1} mt={5}>
        <Grid item xs={12}>
        <h1>Diffrence between Toggle and button</h1>
        </Grid>
        <Grid item xs={2}><Button variant="contained" onClick={()=>setIsLogin(!isLogin)}>toggle</Button></Grid>
        <Grid item xs={2}><Button variant="contained" onClick={()=>setIsLogin(true)}>button</Button></Grid>
        <Grid item xs={2}><Button variant="contained">{isLogin?"Logout":"Login"}</Button></Grid>
        <Grid item xs={2}>
      {isLogin?<Button variant="contained" color="primary">Logout</Button >
              :<Button  variant="contained" color="success">Login</Button>}
      </Grid>
      </Grid>
    </div>
  );
};


