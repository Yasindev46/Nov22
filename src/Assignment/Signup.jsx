import React from "react"
import {Grid,Card,CardContent,Button,TextField} from "@mui/material"
import { Link,useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"

export const Signup=()=>{
    const [user,setUser]=useState({})
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSignup=()=>{
        console.log("===>",user)
        dispatch({type:"Add_user",payLoad:user})
        setTimeout(() => {
            navigate("/")
        }, 500);
    }

    return(
        <React.Fragment>
            <Card style={{width:"300px",marginLeft:"35%",marginTop:"80px"}}>
                <CardContent align="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>Sign up Here</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="text" placeholder="Name" onChange={(e)=>setUser({name:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="email" placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="number" placeholder="Phone" onChange={(e)=>setUser({...user,phone:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="text" placeholder="username" onChange={(e)=>setUser({...user,username:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="password" placeholder="New Password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="password" placeholder="Confirm Password" onChange={(e)=>setUser({...user,confirmpassword:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Already have an account? <Link to="/">Login</Link></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}