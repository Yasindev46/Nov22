import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Card,TextField,Grid, Button } from "@mui/material"

export const EditStudent=()=>{
    const recieved=useLocation()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [name,setName]=useState("")
    const [department,setDepartment]=useState("")
    const [experience,setExperience]=useState("")
    const staff=useSelector((state)=>state.staffReducer.staffData)
    const result=staff.filter((item,i)=>i==recieved.state.ind)
    
    useEffect(()=>{
        setName(result[0].name)
        setDepartment(result[0].department)
        setExperience(result[0].experience)
    },[])

    const handleSave=()=>{
        console.log("===>staffssss",staff)
        staff.splice(recieved.state.ind,1,{name,department,experience})
        console.log("newstaffsss",staff)
        dispatch({type:"Edit_item",payLoad:staff})
        alert("Edited successfully")
        navigate("/staff")
    }
    return(
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"blueviolet",color:"white",boxShadow:"2px 2px 2px black"}}>Add Student Details</h1>
            <Card style={{width:"400px",textAlign:"center",marginLeft:"35%",paddingBottom:"15px"}}>
            <Grid container spacing={3}>
            <Grid item xs={12} mt={2}>
                 <TextField variant="outlined" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
                    <TextField variant="outlined" type="text" value={department}  onChange={(e)=>setDepartment(e.target.value)}/>
            </Grid>
            <Grid item xs={12}>
                    <TextField variant="outlined" type="text" value={experience}  onChange={(e)=>setExperience(e.target.value)}/>
            </Grid>
             <Grid item xs={12}>
                    <Button variant="contained" onClick={handleSave}>Save</Button>
            </Grid>
            </Grid>
            </Card>
        </div>
    )
}