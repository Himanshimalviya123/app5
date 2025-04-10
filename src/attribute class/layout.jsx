import {Link,Outlet}from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <div style={{backgroundColor:"gray", height:"600px"}}>
       <center> 
        <Link to="home" style={{gap:"700%"}}>HOME </Link>  
         <Link to="insert" style={{gap:"700%"}}>INSERT</Link>
        <Link to="display" style={{gap:"700%"}}>DISPLAY</Link>
        
        <Outlet/>
        </center>
        </div>
        </>
    )
}
export default Layout;