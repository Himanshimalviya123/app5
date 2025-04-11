import {Outlet}from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <div>
       <center> 
        {/* <Link to="home">HOME </Link>  
         <Link to="insert">INSERT</Link>
        <Link to="display">DISPLAY</Link> */}
        <Topnav/>
        
        <Outlet/>
        <h2>www.myappdesigncompany.com</h2>
        </center>
        </div>
        </>
    )
}
export default Layout;