import React from "react"
import { TextField,Button,Grid } from "@mui/material"
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
        <div style={{textAlign:"center"}}>
        <h1>TODO LIST</h1>
            <Grid container>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}><TextField variant="outlined" value={text} fullWidth onChange={(e)=>setText(e.target.value)} /> </Grid>
                <Grid item xs={3}><Button variant="contained" onClick={handleAdd}>Add</Button></Grid>
                <Grid item xs={3}></Grid>
            </Grid>
            {console.log(list)}
            {list.map((item,ind)=>{
                return(
                    <div>
                        <h1>{ind+1} {item}</h1>
                        <button onClick={()=>handleDelete(ind)}>Delete</button>
                        <button onClick={()=>handleDelete2(item)}>Delete2</button>
                        <button onClick={()=>handleUpdate(item)}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}