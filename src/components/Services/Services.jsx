import { Link } from "react-router-dom";

const Services = () => {
    return ( 
        <div className="container mx-auto p-5 lg:p-0 my-28 text-center">
            
            <h1 className="text-3xl font-bold text-gray-800 my-10">My Services</h1>

            <div className="flex flex-col md:flex-row justify-evenly items-center mt-5">
                <Link to='copywriting' className="hover:bg-gray-100 transition duration-300 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-5 p-3">
                        <img
                            className="w-16 h-16 object-cover"
                            src="https://img.icons8.com/external-nawicon-flat-nawicon/64/external-copywriting-seo-and-marketing-nawicon-flat-nawicon.png"
                            alt="Copywriting Icon"
                        />
                        <div className="flex flex-col w-64">
                            <h1 className="text-lg font-semibold">Copywriting</h1>
                            <p className="text-sm text-gray-500">
                            Bring in huge revenue through your emails, sales pages, or landing pages by utilizing my persuasive copywriting skills.
                            </p>
                        </div>
                    </div>

                </Link>

               <Link to='/web' className="hover:bg-gray-100 transition duration-300 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-5 p-3">
                        <img
                            className="w-16 h-16 object-cover"
                            src="https://img.icons8.com/ios/100/laptop-coding.png"
                            alt="Web Development Icon"
                        />
                        <div className="flex flex-col w-64">
                            <h1 className="text-lg font-semibold">Web Development</h1>
                            <p className="text-sm text-gray-500">
                            Get your high-converting website and landing pages built now and give your brand a unique identity.
                            </p>
                        </div>
                    </div>
               </Link>

            </div>
        </div>
     );
}
 
export default Services;