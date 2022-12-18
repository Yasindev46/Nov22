import React from "react"
import axios from "axios"
import { useState,useEffect } from "react"
import { Card,Grid, TextField } from "@mui/material"

export const Api=()=>{
    const [apiData,setApiData]=useState([])
    const [apiDatacopy,setApiDatacopy]=useState([])
    const [text,setText]=useState("")

    const getData=async()=>{
        const result=await axios.get("https://gorest.co.in/public/v2/users")
        console.log(result.data)
        setApiData(result.data)
        setApiDatacopy(result.data)
    }


    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        const result=apiDatacopy.filter((item)=>item.name.toLowerCase().includes(text.toLowerCase()))
        setApiData(result)
    },[text])
    return(
        <div>
            <TextField variant="outlined" type="text" placeholder="Search Here" onChange={(e)=>setText(e.target.value)}  style={{marginLeft:"30%",width:"400px"}}/>
         <Grid container spacing={2}>
           {apiData.map((item)=>{
            return(
                <Grid item xs={3}>
                <Card>
                    <h2>Name:- {item.name}</h2>
                    <h3>Email:- {item.email}</h3>
                    <h3>Id:- {item.id}</h3>
                    <h3>Gender:- {item.gender}</h3>
                    <h3>Status:-{item.status}</h3>
                </Card>
                </Grid>
            )
           })}
           </Grid>
        </div>
    )
}