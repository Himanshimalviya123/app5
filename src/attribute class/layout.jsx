import {Outlet}from "react-router-dom";
import Topnav from "../component/topnav";
import myimgg from "./image/images4.jpg";
const Layout=()=>{
    return(
        <>
        <Topnav/>
        <div>
        <img src={myimgg} id="img"/>
        </div>
       <Outlet/>
        </>
    )
}
export default Layout;