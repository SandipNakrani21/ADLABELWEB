
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './Components/CSS/Header.css'
import './Components/CSS/Home.css'
import './Components/CSS/Footer.css'
// import Footer from "./Components/Footer";
// import {Outlet} from 'react-router-dom';

function Layout(){
    return(
        <>
            <Header/>
            
            {/* <Outlet/> */
            <Footer/> }
        </>
    )
}

export default Layout