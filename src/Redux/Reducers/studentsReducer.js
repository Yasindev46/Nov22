const initialState={
    studentsData:[
        {name:"Raj", age:20,city:"Nanded"},
        {name:"Sam", age:23,city:"Pune"},
        {name:"Sam", age:23,city:"Pune"},
        {name:"Seema", age:20,city:"Mumbai"},
    ]
}

export const studentsReducer=(state=initialState,action)=>{
    if (action.type === "ADD_NEW") {
    return {
        ...state,
        studentsData: [...state.studentsData, action.data],
      };
    } 
    if (action.type === "Delete_Item") {
        console.log("action",action.payLoad)
        console.log("action",action.type)
        const result=state.studentsData.filter((elem,i)=>i!=action.payLoad)
console.log("result",result)
            return {...state,studentsData: result };
        } 
     return state;
};