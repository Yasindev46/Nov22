import React from "react"
import {Button, Grid,TextField} from "@mui/material"
import { useState } from "react"

export const Details=()=>{
    const [fname,setFname]=useState("")
    const [mname,setMname]=useState("")
    const [lname,setLname]=useState("")
    const [Dob,setDob]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [officeaddress,setOfficeAddress]=useState("")

    const [alldetails,setAlldetails]=useState({})


      const handleSave=()=>{
        setAlldetails({fname,lname,mname,Dob,email,phone,address,officeaddress})
       }

return(
    <div>
        <h1>Enter Details</h1>
       <Grid container spacing={3}>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="First Name" onChange={(e)=>setFname(e.target.value)}/>
              </Grid>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="Middle Name" onChange={(e)=>setMname(e.target.value)}/>
              </Grid>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="Last Name" onChange={(e)=>setLname(e.target.value)}/>
              </Grid>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="D.O.B" onChange={(e)=>setDob(e.target.value)}/>
              </Grid>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="Email Id" onChange={(e)=>setEmail(e.target.value)}/>
              </Grid>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="Mobile Number" onChange={(e)=>setPhone(e.target.value)}/>
              </Grid>
              <Grid item xs={4}>
                 <TextField fullWidth variant="outlined" label="Address" onChange={(e)=>setAddress(e.target.value)}/>
              </Grid>
              <Grid item xs={8}>
                 <TextField fullWidth variant="outlined" label="Permanent official" onChange={(e)=>setOfficeAddress(e.target.value)}/>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}><Button fullWidth variant="contained" color="success" onClick={handleSave}>Save</Button> </Grid>
              <Grid item xs={3}><Button fullWidth variant="contained" color="error">Cancel</Button> </Grid>
              
       </Grid>

<br /><br />
<h1>Your Details:-</h1>
       <table border={"2px"}>
        <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Email ID</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Official Address</th>
        </tr>
        <tr>
            {console.log(alldetails)}
            <td>{alldetails.fname}</td>
            <td>{alldetails.mname}</td>
            <td>{alldetails.lname}</td>
            <td>{alldetails.Dob}</td>
            <td>{alldetails.email}</td>
            <td>{alldetails.phone}</td>
            <td>{alldetails.address}</td>
            <td>{alldetails.officeaddress}</td>
        </tr>
       </table>
    </div>
)
}

