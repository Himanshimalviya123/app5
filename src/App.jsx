// ==========================( expression in js )======================================================
// const name="himanshi malviya"
// const age=20
// const city="bhopal"
// const salary=35000
//  const app=()=>{
//   return(
//     <>
// <h1>My name is {name}.i ame {age} year old.i am live in {city}.my salary is{salary}
//    </h1>
//     </>
//   )
//  }
//  export default app;
// ==============================(inserting  a large block of element)=============================
// const sub=
// <ul>
//   <li>php</li>
//   <li>oracle</li>
//   <li>java</li>

// const { useState } = require("react")

// </ul>
// const subject=()=>{
//   return(
// <>
// <h1>my subject is:{sub}</h1>
// </>
//   )
// }
// export default subject;
// ==============================( one top level element )================================
// let abc=()=>{
//   return(
//     <p style={{background:"green"}}>
//     <h4>hello cybrom</h4>  <br/>  <h4>e learn react js</h4>
//     <h4>my subject is mern full stack .</h4>
// </p>
//   )
// }
// export default abc;
// ====================(element must be closed )====================================
// const app=()=>{
//   return(
//     <>
//     <h1>
//      <b><u> we are learn is react js</u></b>
//     </h1>
//     </>
//   )
// }
// export default app;
// ====================( attribute class=className: )========================
// import Header from "./attribute class/header";
// import Footer from "./attribute class/footer";
// import Data from "./attribute class/data";
// const Abc=()=>{
//     return(
//         <>
//         <h1>welcome to react class!</h1>
//         <Data/>
//         <Header/>
//         <Footer/>
//         </>
//     )
// }
// export default Abc;
// ========================(  REACT COMPONENT )==============================
// 1. FUNCTIONAL COMPONENT
// 2. CLASS COMPONENT

// ========================== ( PROPS ) ==========================
// import Student from "./attribute class/student";
// const log=()=>{
// return(
//     <h1>
//         welcome  to cybrom 
//         <Student nm="himanshi" branch="cse" city="bhopal"/>
//     </h1>
// )
// }
// export default log;
// ---------------------------------------------------------------------------------
// import Pop from "./attribute class/clg";
// const clg={
// name :"rgpv",
// subject:"cse",


// };
// const abc=()=>{ 

//     return(
//         <>
//         <h1>hello cybrom</h1>
//        <Pop clgname={clg.name} sub={clg.subject}/>
//    {/* (component name, props variable name,app const name,app variable name, )  */}
//         </>
//     )
// }
// export default abc;
// ============================( map )====================================
// =====================================================================================================
// import { useState } from "react";
// const App=()=>{
//     const[name,setName]=useState("khusi");
//     return(
//         <>
//         <h1>welcome to my {name}</h1>
//         <button onClick={()=>{setName("himanshi")}}>submit</button>
//         </>
//     )
// }
// export default App;
// =====================================================================
// import { useState } from "react";
// const App=()=>{
//     const[color,setColor]=useState("red");
//     return(
//         <>
//         <h1 style={{ color:color}} > my favuorite color :{color}</h1>
//         <button onClick={()=>{setColor("green")}}>green color</button>
//         <button onClick={()=>{setColor("pink")}}>pink color</button>
//         <button onClick={()=>{setColor("orange")}}>orange color</button>
//         <button onClick={()=>{setColor("blue")}}>blue color</button>

//         </>
//     )
// }
// export default App;
// ===================create a counter app===============================
import { useState } from "react";

const App=()=>{
    const[cnt,setCnt]=useState(0);
   const mydec=()=>{
    if  (setCnt<=0)
{
    alert("not less than zero!")
}
    else
    {
        setCnt(cnt-1);
    }
}
    return(
        <>
        <h1 >my counter app{name}</h1>
        <div style={{border:"2px solid red",padding:"20px",borderRadius:"30px",
            backgroundColor:"blue",width:"400px",margin:"auto"}}>
                <h1>my count :{cnt}</h1>
                <button onClick={()=>{setCnt(cnt+1)}}> increment</button>
                <button onClick={()=>{mydec}}> decrement</button>
                <button onClick={()=>{setCnt(0)}}>reset</button>
             
        </div>
        </>
    )
}
export default App;
// =========================================
// import { useState,useEffect } from "react";
// const App=()=>{
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)
//         },4000)
//     })
//     return(
//         <>
//         <h1>welcome:{count}</h1>
//         <button>SUBMIT</button>
//         </>
//     )
// }
// export default App;