import React, { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Grid,Card,Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const StaffList=()=>{
const [data,setData]=useState([])
const dispatch=useDispatch()
const navigate=useNavigate()
    const staffsData=useSelector((state)=>state.staffReducer.staffData)
    console.log(staffsData)
    useEffect(()=>{
        setData(staffsData)
    },[])

    useEffect(()=>{
        setData(staffsData)
    },[staffsData])

    const handleDelete=(ind)=>{
        dispatch({type:"Delete_item",payLoad:ind})
    }

    const handleEdit=(item,ind)=>{
        navigate("/editstudent",{state:{item,ind}})
    }
    return(
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"blueviolet",color:"white",boxShadow:"2px 2px 2px black"}}>Staff Data</h1>
            <Grid container spacing={3}>
            {data.map((item,ind)=>{
                return(
                    <Grid item xs={3}>
                    <Card style={{backgroundColor:"orangered",paddingLeft:"10px",color:"white",paddingBottom:"10px",boxShadow:"4px 4px 4px black",textShadow:"2px 2px 2px black"}}>
                        <h2>Name:- {item.name}</h2>
                        <h2>Department:- {item.department}</h2>
                        <h2>Experience:-{item.experience}</h2>
                        <Button variant="contained" onClick={()=>handleDelete(ind)} style={{position:"relative",left:"40px",marginLeft:"10px"}}>Delete</Button>
                        <Button variant="contained" onClick={()=>handleEdit(item,ind)} style={{position:"relative",left:"60px",marginLeft:"10px"}}>Edit</Button>
                    </Card>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}