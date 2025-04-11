import {Link,Outlet}from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <div style={{backgroundColor:"white", height:"600px",color:"black"}}>
       <center> 
        <Link to="home" style={{gap:"700%"}}>HOME </Link>  
         <Link to="insert" style={{gap:"700%"}}>INSERT</Link>
        <Link to="display" style={{gap:"700%"}}>DISPLAY</Link>
        
        <Outlet/>
        <h2>www.myappdesigncompany.com</h2>
        </center>
        </div>
        </>
    )
}
export default Layout;