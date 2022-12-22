import { Button, Card,CardContent,TextField,Grid } from "@mui/material"
import React from "react"
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

export const Login=()=>{

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [userDetail,setUserDetail]=useState(null)

    const usersData=useSelector((state)=>state.UsersReducer.users)
    console.log("==users",usersData)
    const result=usersData.filter((item)=>item.username===username)
    // console.log("==result",result)

    useEffect(()=>{
        setUserDetail(result)
    },[username])

    const navigate=useNavigate()
    const handleLogin=()=>{
        if(username===userDetail[0].username && password===userDetail[0].password){
            navigate("/display")
        }else{
            alert("Please check username & Password")
        }
    }
    return(
        <React.Fragment>
            <Card style={{width:"300px",marginLeft:"35%",marginTop:"80px"}}>
                <CardContent align="center">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <h1>Login Here</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={handleLogin}>Login</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <p>Need and account? <Link to="/signup">Sign Up</Link></p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}