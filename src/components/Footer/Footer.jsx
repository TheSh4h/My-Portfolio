const Footer = () => {

    let currentDate = new Date();
    let year = currentDate.getFullYear();

    return ( 
        <div className="bg-gray-800 text-start">
            <div className="container mx-auto">
                <h1 className="font-bold text-white text-xl p-10">Copyright © {year}. All rights are reserved</h1>
            </div>
        </div>
     );
}
 
export default Footer;