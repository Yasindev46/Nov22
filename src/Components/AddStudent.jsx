import React from "react"
import {Grid,Button,TextField} from "@mui/material"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import {useNavigate} from "react-router-dom"

export const AddStudent=()=>{
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [city,setCity]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const result=useSelector((state)=>state.studentsReducer.studentsData)
    console.log("====>",result)
    const handleAdd=()=>{
        dispatch({ type: "ADD_NEW", data: { name, age, city } });
        setTimeout(() => {
            navigate("/students")
        }, 500);
    }
    return(
        <div>
            <h1>Add Student Details</h1>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField variant="outlined" type="text" placeholder="Enter Name" name={name} value={name} onChange={(e)=>setName(e.target.value)} />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" type="text" placeholder="Enter Age" name={age} value={age} onChange={(e)=>setAge(e.target.value)} />
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" type="text" placeholder="Enter City" name={city} value={city} onChange={(e)=>setCity(e.target.value)} />
                </Grid>
                <Grid item>
                <Button variant="contained" onClick={handleAdd}>Save</Button>
                </Grid>
            </Grid>
        </div>
    )
}