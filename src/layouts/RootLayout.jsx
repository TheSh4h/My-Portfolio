import About from "../components/About/About";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";

const RootLayout = () => {
    return ( 
        <>
            <Navbar />
            <About />
            <Services />
        </>
     );
}
 
export default RootLayout;