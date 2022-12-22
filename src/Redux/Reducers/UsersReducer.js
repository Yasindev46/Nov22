const initialData={
    users:[
        {name:"Yasin",phone:123456789,email:"Yasin@gmail.com",username:"Yasin123",password:"Yasin@123"},
        {name:"Admin",phone:123456000,email:"Admin@gmail.com",username:"Admin123",password:"Admin@123"},
    ]
}
export const UsersReducer=(state=initialData,action)=>{
    if(action.type==="Add_user"){
        return{...state,users:[...state.users,action.payLoad] }
    }
    if(action.type==="Delete_user"){
        const result=state.users.filter((item,i)=>i!=action.payLoad)
        console.log("===deleted",result)
        return{...state,users:result}
    }
    if(action.type==="Edit_user"){
        console.log("===>action",action.payLoad)
        state.users.splice(action.payLoad.index,1,action.payLoad.user)
    return{...state,users:state.users}
    }
    return state
}