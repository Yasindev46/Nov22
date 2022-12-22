import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {Grid,Button} from "@mui/material"
import { useNavigate } from "react-router-dom"

export const Display=()=>{
    const [users,setUsers]=useState([])
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const usersData=useSelector((state)=>state.UsersReducer.users)
    // console.log("==usersData",usersData)

    useEffect(()=>{
        setUsers(usersData)
    },[])

    useEffect(()=>{
        setUsers(usersData)
    },[usersData])
    const handleDelete=(index)=>{
        dispatch({type:"Delete_user",payLoad:index})
    }
    const handleEdit=(item,index)=>{
        navigate("/edituser",{state:{item,index}})
    }
    return(
        <React.Fragment>
            <h1>Users List</h1>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <table border={"2px"}>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Eidt</th>
                            <th>Delete</th>
                        </tr>
                    {users.map((item,index)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td><Button variant="contained" onClick={()=>handleEdit(item,index)}>Edit</Button></td>
                                <td><Button variant="contained" onClick={()=>handleDelete(index)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                   </table>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}