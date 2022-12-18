import React from "react"
import { TextField,Button,Grid,Card, CardContent } from "@mui/material"
import { useState } from "react"


export const Todolist=()=>{
const [text,setText]=useState("")
const [list,setList]=useState([])


const handleAdd=()=>{
setList([...list,text])
setText("")
}

const handleDelete=(ind)=>{
    const filtered=list.filter((item,i)=>i!==ind)
setList(filtered)
}

const handleDelete2=(item)=>{
    const filtered=list.filter((elem)=>elem!==item)
    setList(filtered)
}

const handleUpdate=(item)=>{
setText(item)
}
    return(
        <Grid container spacing={3}>
        <Grid container>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}><h1>TODO LIST</h1></Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={3}></Grid>
                <Grid item xs={3}><TextField variant="outlined" value={text} fullWidth onChange={(e)=>setText(e.target.value)} /> </Grid>
                <Grid item xs={3}><Button variant="contained" onClick={handleAdd}>Add</Button></Grid>
                <Grid item xs={3}></Grid>

        </Grid>
            {list.map((item,ind)=>{
                return(
                    // <Grid >
                        <Card style={{marginLeft:"25%",width:"40%", textAlign:"center",marginTop:"5px"}}>
                        <CardContent>
                        <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <h2>{ind+1} {item}</h2>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}> 
                            <Grid item xs={4}>
                            <Button variant="contained" onClick={()=>handleDelete(ind)}>Delete</Button>
                            </Grid>
                            <Grid item xs={4}>
                            <Button variant="contained" onClick={()=>handleDelete2(item)}>Delete2</Button>
                            </Grid>
                            <Grid item xs={4}>
                            <Button variant="contained" onClick={()=>handleUpdate(item)}>Edit</Button>
                            </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                        </CardContent>
                        </Card>
                    // </Grid>
                )
            })}
 </Grid>
    )
}