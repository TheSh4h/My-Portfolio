import About from "../components/About/About";
import Interest from "../components/Interest/Interest";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const RootLayout = () => {
    return ( 
        <>
            <Navbar />
            <About />
            <Services />
            <Interest />
        </>
     );
}
 
export default RootLayout;