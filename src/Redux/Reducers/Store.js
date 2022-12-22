import {createStore,combineReducers} from "redux"
import {studentsReducer} from "./studentsReducer"
import { staffReducer } from "../staffReducer"
import { UsersReducer } from "./UsersReducer"



export const configureStore=()=>{
    const store=createStore(combineReducers({studentsReducer,staffReducer,UsersReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__())
    return store;
}