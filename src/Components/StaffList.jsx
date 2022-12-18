import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Grid,Card } from "@mui/material"

export const StaffList=()=>{
const [data,setData]=useState([])
    const staffsData=useSelector((state)=>state.staffReducer.staffData)
    console.log(staffsData)
    useEffect(()=>{
        setData(staffsData)
    },[])
    return(
        <div>
            <h1 style={{textAlign:"center",backgroundColor:"blueviolet",color:"white",boxShadow:"2px 2px 2px black"}}>Staff Data</h1>
            <Grid container spacing={3}>
            {data.map((item)=>{
                return(
                    <Grid item xs={3}>
                    <Card style={{backgroundColor:"orangered",paddingLeft:"10px",color:"white",boxShadow:"4px 4px 4px black",textShadow:"2px 2px 2px black"}}>
                        <h2>Name:- {item.name}</h2>
                        <h2>Department:- {item.department}</h2>
                        <h2>Experience:-{item.experience}</h2>
                    </Card>
                    </Grid>
                )
            })}
            </Grid>
        </div>
    )
}