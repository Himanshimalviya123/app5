import { useState } from "react";
import axios from "axios";
const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
        
    }

    return(
        <>
        <h1>
            welcome to home page!!
        </h1>
        </>
    )
}
export default Insert;