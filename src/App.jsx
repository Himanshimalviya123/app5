// const name="shivani"
// const age=11
// const salary=35000
// const App=()=>{
//   return(
//     <p>Welcome to react i am {name} my age is {age*2} my salary {salary*3}</p>
//   )
// }
// export default App;

// import { useState } from "react";

// const subject=<ul>
//          <li>PHp</li>
//          <li>Oracle</li>
//          <li>java</li>
//          <li>sql</li>
// </ul>

// const App=()=>{
//   return(
//     <h1>My Subject:{subject}</h1>
//   )
// }
// export default App;

//===========================================one top level  element==================================================== 
// const App=()=>{
//   return(
//     <>
//     <h1>welcome to react</h1>
//     <h1> we learn java</h1>
//     <p>i am developer</p>
//     </>
//   )
// }
// export default App;

// const App=()=>{
//   return(
//     <>
//     Enter name:<input type="text"  />
//     <br />
//     <br />
//     Enter city:<input type="text"  />
//     <br />
//     <br />
//     Enter course:<input type="text"  />

//     </>
//   )
// }
// export default App;

// import Cybrom from "./Cybrom";
// import Data from "./Data";
// import Footer from "./Footer";
// import Header from "./Header";
// const App=()=>{
//      return(
//       <>
//          <p>Welcome to react</p>
//         <Cybrom/>
//         <Header/>
//         <Data />
//         <Footer/>
        
//       </>
//      )
//   }
//    export default App;

// const App=()=>{
//    return(
//       <>
//         <h1 style={{color:"red",fontFamily:"arial",textDecoration:"underline"}}>Welcome to React Classes!!!</h1>
//       </>
//    )
// }
// export default App;
//====================================================inline css================================================================
// const App=()=>{
//    return(
//       <>
//       <div style={{border:"1px solid black",width:"350px" ,height:"160px",background:"yellow",borderRadius:"20px",marginLeft:"35%"}}>
//          <div style={{border:"1px solid black",width:"300px" ,height:"120px",background:"red",borderRadius:"20px",margin:"20px"}}>
//             <div style={{border:"1px solid black",width:"250px" ,height:"60px",background:"blue",borderRadius:"10px",margin:"26px",textAlign:"center",lineHeight:"4",marginLeft:"26px",color:"white",fontFamily:"cursive"}}>
//                CYBROM
//             </div>
//          </div>
//       </div>
//       </>
//    )

// }
// export default App;
//=========================================inline css form object============================================================================================
// const data={
//    color:"red",
//    textDecoration:"underline",
//    fontsize:"40px"
// }

// const App=()=>{
//    return(
//       <>
//       <h1 style={data}>Welcome To React!!!</h1>
      
//       </>
//    )
// }
// export default App;

//=========================================inline css form css file import main.jsx============================================================================================
// import Cybrom from "./Cybrom";
// import Data from "./Data";

// const App=()=>{
//    return(
//       <>
//       <h1 className="data">Welcome To React!!!</h1>
//       <Cybrom/>
//       <Data/>
//       </>
//    )
// }
// export default App;

//========================================03-04-2025==========================================================================================

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import Carousel from 'react-bootstrap/Carousel';
// import img1 from "./images/download.jpg";
// import img2 from "./images/download (1).jpg";
// import img3 from "./images/download (2).jpg";

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



// const App=()=>{
//    return(
//       <>
//       <h1>Welcome To React!!!</h1>
//       <hr />
//       <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">About</Nav.Link>
//             <Nav.Link href="#pricing">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Carousel>
//       <Carousel.Item>
//          <img src={img1} width="100%" height="400px"/>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={img2}  width="100%" height="400px"/>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src={img3}  width="100%" height="400px"/> 
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>


//     <div id="mycard">

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img1} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>

//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img2} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
      
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img3} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
      
//     </div>

//     <Container>
//       <Row>
//         <Col>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img1} height="230"/>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card></Col>

//     <Col>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img2} height="230"/>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//     </Col>

//     <Col>
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={img3} height="230"/>
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card></Col>
//       </Row>
//     </Container>
      
      
//       </>
//    )
// }
// export default App;

//===============================================05-04-2025()================================================================================================
// const App=()=>{
//     return(
//       <>
//         <h1>Welcome To React Classes!!!!</h1>
//         Enter your Name:<input type="text" /><br></br><br></br>
//         Enter your Number:<input type="text" /><br></br><br></br>
//         <button>Submit</button>
//       </>
//     )
//   }
//   export default App;
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
// ===================create a counter app=====(use state)==========================
// import { useState } from "react";

// const App=()=>{
//     const[cnt,setCnt]=useState(0);
//    const mydec=()=>{
//     if  (cnt<=0)
// {
//     alert("not less than zero!")
// }
//     else
//     {
//         setCnt(cnt-1);
//     }
// }
//     return(
//         <>
//         <h1 >my counter app</h1>
//         <div style={{border:"2px solid red",padding:"20px",borderRadius:"30px",
//             backgroundColor:"lightskyblue",width:"400px",margin:"auto"}}>
//                 <h1>my count :{cnt}</h1>
//                 <button onClick={()=>{setCnt(cnt+1)}}> increment</button>
//                 <button onClick={mydec}> decrement</button>
//                 <button onClick={()=>{setCnt(0)}}>reset</button>
             
//         </div>
//         </>
//     )
// }
// export default App;
// ============================== ( no.increasing )=====(useEffect=side effect)======
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
// ==========================================(useaeffect 1)====================================================================
// import { useState,useEffect } from "react";
// const App=()=>{
//     const[count,setCount]=useState(0);    //variable
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)
//         },5000)
//     })
//     return(
//         <>
//         <h1>react example :{count}</h1>
       
//         </>
//     )
// }
// export default App;
// ==================================(useeffect 2)=======================================
// import { useState,useEffect } from "react";
// const App=()=>{
//     const[count,setCount]=useState(0);    //variable
//     useEffect(()=>{
//         setTimeout(()=>{
//             setCount(count+1)
//         },5000)
//     },[])
//     return(
//         <>
//         <h1>react example :{count}</h1>
       
//         </>
//     )
// }
// export default App;
// =================================(useeffect-3)================================
// import { useState,useEffect } from "react";
// const App=()=>{
//     const[count,setCount]=useState(0);    //variable
//     const[multi,setMulti]=useState(0);
//     useEffect(()=>{
     
//           setMulti(count*2)
//     },[count])
//     return(
//         <>
//         <h1>my counter :{count}</h1>
//         <h1>multiplication :{multi}</h1>
//         <button onClick={()=>{setCount(count+1)}}>click here!</button>
//         </>
//     )
// }

// export default App;

// ======================================form===============================
// import { useState} from "react";
// const App=()=>{
//     const[name,setName]=useState("");
//     const[city,setCity]=useState("");
//     const handleSubmit=()=>{
//         alert(`my name :${name} city:${city}`)
//     }
//     return(
// <>
// <h1>application form</h1>
// name:<input type="text" value={name}
// onChange={(e)=>{setName(e.target.value)}}/>
// <br/>
// city:<input type="text" value={city}
// onChange={(e)=>{setCity(e.target.value)}}/>
// <br/>
// <button onClick={handleSubmit}>save!</button>
// </>
//     )
// }
// export default App;
// ==================================spread operter====================
// import { useState} from "react";
// const App=()=>{
//     const[input,setInput]=useState({});  //input={}
//     const handleInput=(e)=>{
//         let name=e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value}))
//         console.log(input);
        
//     }
//     return(
// <>
// <h1>application form</h1>
// name:<input type="text" name="name"
// onChange={handleInput}/>
// <br/>
// rollno.:<input type="text" name="rollno."
// onChange={handleInput}/>
// <br/>
// city:<input type="text" name="city"
// onChange={handleInput}/>
// <br/>
// fees:<input type="text" name="fees"
// onChange={handleInput}/>
// <br/>
// <button onClick={handleInput}>save!</button>
// </>
//     )
// }
// export default App;



/////////////////////////handle function submit////////////////////////////
// import axios from "react";
// import { useState } from "react";
// const App=()=>{
//     const [input,setInput]=useState({});
//     const handleInput=(e)=>{
//         let name =e.target.name;
//         let value=e.target.value;
//         setInput(values=>({...values,[name]:value}))
//         console.log(input);
        
//     }
//     const handleSubmit=async()=>{
//       let api="http://localhost:3000/data";
//       const response=await axios.post(api,input);
//       console.log(response);
      
//       alert("data save sussessfully !!")

//     }
//      return(
//     <>
//     <h1>APPLICATION FORM</h1>
//     rollno:<input type="text" name="roll no" onChange={handleInput}/>
//     <br/>
//     name:<input type="text" name="name" onChange={handleInput}/>
//     <br/>
//     fees:<input type="text" name="fees" onChange={handleInput}/>
//     <br/>
//     city:<input type="text" name="city" onChange={handleInput}/>
//     <br/>
//     <button onClick={handleSubmit}>save!</button>
//     </>
// )
// }
// export default App;
// **********************************( json )**********************************************************
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./attribute class/layout";
import Home from "./attribute class/home";
import Insert from "./attribute class/insert";
import Display from "./attribute class/display";
const App=()=>{
  return(
      <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display"element={<Display/>}/>
      </Route>
     </Routes>
     </BrowserRouter>
      </>
  )
}
export default App;