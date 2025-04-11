import axios from "axios";
import { useState,useEffect } from "react";
const Display=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:3000/data";
        const response=await axios.get(api);
        console.log(response.data);
        setMydata(response.data)
        

    }
    useEffect(()=>{
        loadData();
    },[]);
    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
    })
    return(
        <>
       <center><h1>DISPLAY   DATA!! </h1></center>
        <table border="2" >
            <tr>
                <th>EMP NO</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>SALARY</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;