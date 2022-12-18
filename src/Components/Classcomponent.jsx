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
                   text1:this.state.text1="bye"})
    }

  render() {
    return (
      <div>
        <h1>This is Class Component</h1>
       <h1>Count:- {this.state.count}</h1>
       <h1>Count2:- {this.state.count2}</h1>
       <h1>Count2:- {this.state.text1}</h1>
       <button onClick={this.handleAdd}>Inc</button>
      </div>
    )
  }
}
