import React  from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./sidebar";
const Layout: REACT.FC = ({children}) => {
    return(
<div>
    <Header></Header>
    <Sidebar></Sidebar>
    {children}
    <Footer></Footer>
</div>
    )
}
export default Layout