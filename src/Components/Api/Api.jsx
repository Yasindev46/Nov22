import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Api() {
    const [apidata,setApidata]=useState([])
    const [apidata1,setApidata1]=useState([])
    const [thead,setThead]=useState([])
    const [thead1,setThead1]=useState([])
    const getdata=async()=>{
        const result=await axios.get("https://api.publicapis.org/entries")
        console.log(result.data.entries)
        setApidata(result.data.entries)
        apidata.length>0 && setThead(Object.keys(apidata[0]))
        console.log(thead);
    }
    const getdata1=async()=>{
        const result=await axios.get("https://6cw4vl6ty7.execute-api.ap-northeast-1.amazonaws.com/dev")
        console.log(result.data.body.data)
        setApidata1(result.data.body.data)
        apidata1.length>0 && setThead1(Object.keys(apidata1[0]))
        console.log(thead1);
    }
    useEffect(()=>{
        getdata()
        getdata1()

    },[])
  return (
    <div>
      <h1>Api Component</h1>
      <table border={"2px"} style={{borderCollapse:"collapse"}}>
        <tr>
          {thead.map((item)=>{
            return(
              <th>{item}</th>
            )
          })}
          </tr>
            </table>
          <br /><br />
            <table border={"2px"} style={{borderCollapse:"collapse"}}>

          <tr>
          {thead1.map((item)=>{
            return(
              <th>{item}</th>
            )
          })}
        </tr>
      </table>
    </div>
  )
}
