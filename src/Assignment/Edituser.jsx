import React,{useState} from "react"
import {Grid,Card,CardContent,Button,TextField} from "@mui/material"
import { useNavigate,useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const Edituser=()=>{
    const [user,setUser]=useState({})
    const [index,setIndex]=useState(null)
    const navigate=useNavigate()
    const recieved=useLocation()
    const dispatch=useDispatch()

    console.log("====recived",recieved.state)

    const handleSave=()=>{
        dispatch({type:"Edit_user",payLoad:{user,index}})
        setTimeout(() => {
            navigate("/display")
        }, 500);
        
    }
    useEffect(()=>{
        setUser(recieved.state.item)
        setIndex(recieved.state.index)
    },[])
    return(
        <React.Fragment>
            <Card style={{width:"300px",marginLeft:"35%",marginTop:"80px"}}>
                <CardContent align="center">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>Edit User</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="text" value={user.name} placeholder="Name" onChange={(e)=>setUser({name:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="email" value={user.email} placeholder="Email" onChange={(e)=>setUser({...user,email:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="number" value={user.phone} placeholder="Phone" onChange={(e)=>setUser({...user,phone:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="text" value={user.username} placeholder="username" onChange={(e)=>setUser({...user,username:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" type="password" value={user.password} placeholder="New Password" onChange={(e)=>setUser({...user,password:e.target.value})}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" onClick={handleSave}>Save</Button>
                        </Grid>
                       
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    )
}