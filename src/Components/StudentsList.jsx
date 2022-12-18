import React, { useEffect, useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { Grid,Card,Button } from "@mui/material"


export const StudentsList=()=>{
    const [data,setdata]=useState([])
    const dispatch=useDispatch()

    const result=useSelector((state)=>state.studentsReducer.studentsData)
    // console.log(result)
    useEffect(()=>{
        setdata(result)
    },[])
    
    useEffect(()=>{
        setdata(result)
    },[result])

    const handleDelete=(ind)=>{
        dispatch({type:"Delete_Item",payLoad:ind})  //dispatching an action
    }
  
    return(
        <React.Fragment>
            <h1 style={{textAlign:"center",backgroundColor:"blueviolet",color:"white",boxShadow:"2px 2px 2px black"}}>Students Data</h1>
            <Grid container spacing={3}>
           {data.map((item,ind)=>{
            return(
                <Grid item xs={3}>
                    <Card style={{backgroundColor:"orangered",paddingLeft:"10px",paddingBottom:"10px", color:"white",boxShadow:"4px 4px 4px black",textShadow:"2px 2px 2px black"}}>
                    <h2>Name:-{item.name}</h2>
                    <h2>Age:- {item.age}</h2>
                    <h2>City:- {item.city}</h2>
                   <Button variant="contained" onClick={()=>handleDelete(ind)} style={{position:"relative",left:"10px"}}>Delete</Button>
                    </Card>
                </Grid>
            )
           })}
           </Grid>
        </React.Fragment>
    )
}