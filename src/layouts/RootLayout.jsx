import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
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
            <Contact />
            <footer>
                <Footer />
            </footer>
        </>
     );
}
 
export default RootLayout;