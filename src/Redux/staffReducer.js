const initialState={
    staffData:[
        {name:"Amer",
        department:"Scinece",
        experience:"5 Years"},
        {name:"Akshay",
        department:"Biology",
        experience:"3 Years"},
        {name:"Deepali",
        department:"Maths",
        experience:"5 Years"},
        {name:"Rakesh",
        department:"Marathi",
        experience:"5 Years"},
        {name:"Ahmed",
        department:"Hindi",
        experience:"4 Years"},
        ]
}

export const staffReducer=(state=initialState,action)=>{
    if(action.type==="Delete_item"){
        console.log("==",action.payLoad)
        const result=state.staffData.filter((item,i)=>i!=action.payLoad)
        console.log(result)
        return {...state,staffData:result}
    }
    if(action.type==="Edit_item"){
        return{...state,staffData:action.payLoad}
    }
    return state
}