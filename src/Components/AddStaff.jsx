import { TextField,Grid,Button } from "@mui/material"
import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

export const AddStaff=()=>{
    const [name,setName]=useState("")
    const [department,setDepartment]=useState("")
    const [experience,setExperience]=useState("")
    const disptach=useDispatch()
    const navigate=useNavigate()

    const handleSave=()=>{
        disptach({type:"Add_item",payLoad:{name,department,experience}})
        setTimeout(() => {
            navigate("/staff")
        }, 500);
    }
    return(
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <h1>Add New Staff Details</h1>
                </Grid>
                <Grid item xs={4}>
                <TextField variant="outlined" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                <TextField variant="outlined" placeholder="Enter Department" onChange={(e)=>setDepartment(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                <TextField variant="outlined" placeholder="Enter Experience" onChange={(e)=>setExperience(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                <Button variant="contained" onClick={handleSave}>Save</Button>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}