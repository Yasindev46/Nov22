import { Button } from '@mui/material'
import React, { Component } from 'react'

export default class Classcomponent extends Component {
    state={
        count:100,
        count2:10,
        text1:"hello"
    }
   handleAdd=()=>{
    this.setState({count:this.state.count+5,
                   count2:this.state.count2+10,
                  })
    }
    handleChange=()=>{
      this.setState({text1:this.state.text1="Hello Everyone"})
    }
  render() {
    return (
      <div >
        <h1>This is Class Component</h1>
       <h1>Count:- {this.state.count}</h1>
       <h1>Count2:- {this.state.count2}</h1>
       <h1>Count2:- {this.state.text1}</h1>
       <Button variant='contained' onClick={this.handleAdd}>Increment</Button>
       <Button variant='contained' onClick={this.handleChange}>Change</Button>
      </div>
    )
  }
}
