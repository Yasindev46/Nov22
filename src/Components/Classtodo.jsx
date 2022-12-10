import React ,{Component} from "react"

export default class Classtodo extends Component{
state={
    text:"",
    list:[]
}
handleAdd=()=>{
    this.setState({list:[...this.state.list,this.state.text]})
}

handlDelete=(ind)=>{
   const result= this.state.list.filter((item,i)=> i!==ind)
   this.setState({list:result})
}
    render(){
        return(
            <div>
                <input type="text" onChange={(e)=>this.setState({text:e.target.value})} />
                <button onClick={this.handleAdd}>Add</button>
                {this.state.list.map((item,ind)=>{
                    return(
                        <div>
                            <h1>{ind+1} - {item}</h1>
                            <button onClick={()=>this.handlDelete(ind)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}