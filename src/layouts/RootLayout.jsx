import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
    return ( 
        <>
            <Navbar />
            <body>
                <Outlet />
            </body>
            <footer>
                <Footer />
            </footer>
        </>
     );
}
 
export default RootLayout;