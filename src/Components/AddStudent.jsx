import React from "react"
import {Grid,Button,TextField,Card} from "@mui/material"
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
            <h1 style={{textAlign:"center",backgroundColor:"blueviolet",color:"white",boxShadow:"2px 2px 2px black"}}>Add Student Details</h1>
            <Card style={{width:"400px",textAlign:"center",marginLeft:"35%",paddingBottom:"15px"}}>
            <Grid container spacing={3}>
                <Grid item xs={12} mt={2}>
                    <TextField variant="outlined" type="text" placeholder="Enter Name" name={name} value={name} onChange={(e)=>setName(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" type="text" placeholder="Enter Age" name={age} value={age} onChange={(e)=>setAge(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" type="text" placeholder="Enter City" name={city} value={city} onChange={(e)=>setCity(e.target.value)} />
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" onClick={handleAdd}>Save</Button>
                </Grid>
            </Grid>
            </Card>
        </div>
    )
}