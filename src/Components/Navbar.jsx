import React from "react"
import { Link } from "react-router-dom"
import { Grid,Card } from "@mui/material"

export const Navbar=()=>{
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Card>
                         <Link to="/"><h2> Home</h2></Link>
                     </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                         <Link to="/todo"><h2>Todo List</h2></Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <Link to="/counter"><h2>Counter</h2></Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <Link to="/api"><h2>Api/Axios</h2></Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <Link to="/turnary"><h2>Turnary Operator</h2></Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <Link to="/class"><h2>Class Comp</h2></Link>
                    </Card>
                </Grid>
                <Grid item xs={2}>
                    <Card>
                        <Link to="/classtodo"><h2>Class TODO</h2></Link>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}