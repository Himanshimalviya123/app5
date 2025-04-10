import {Link,Outlet}from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">HOME</Link>
        <Link to="insert">INSERT</Link>
        <Link to="display">DISPLAY</Link>
        <hr>
        <Outlet/>
        </hr>
        </>
    )
}
export default Layout;