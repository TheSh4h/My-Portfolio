import { Link } from "react-router-dom";

const Web = () => {
    return ( 
        <div className="overflow-hidden">
            <div className="container mx-auto p-5 flex flex-col items-center justify-center space-y-10 my-10">
                
                <div className="flex flex-col justify-center items-center space-y-20 mb-10">

                    <div className="flex flex-col justify-center items-center space-y-5">
                        <h1 className="text-4xl font-bold text-gray-800 my-5">Let's Make Your Brand Standout in the Crowd</h1>
                        <div>
                            <Link to='/contact'>
                                <div 
                                    className="font-semibold px-16 py-5 bg-gray-800 text-white shadow-xl
                                    border-2 border-gray-800 hover:bg-white hover:text-gray-800 transition duration-200 cursor-pointer">CONTACT ME NOW
                                </div>
                            </Link>
                            <p className="text-md text-gray-500 py-2">Hurry up before our schedule for the month is filled</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h1 className="text-4xl font-semibold text-gray-800">I'll Help You</h1>
                        <ul className="text-start text-xl text-gray-500">
                            <li> <span className="text-yellow-500 font-bold text-2xl">✓</span> Provide a unique identity to your brand</li>
                            <li> <span className="text-yellow-500 font-bold text-2xl">✓</span> Make your business appear legit and authentic</li>
                            <li> <span className="text-yellow-500 font-bold text-2xl">✓</span> Generate more leads</li>
                        </ul>
                    </div>
                </div>

                <div className="lg:flex justify-center items-center space-x-10">
                    <h1  className="py-3 font-bold">Tech Stack | </h1>
                    <ul className="flex justify-between space-x-5">
                        <li className="hover:-translate-y-3 transition duration-500 cursor-pointer">
                            <img src="https://skillicons.dev/icons?i=html,css,js" />
                        </li>
                        <li className="hover:-translate-y-3 transition duration-500 cursor-pointer">
                            <img src="https://skillicons.dev/icons?i=react,redux,tailwind" />
                        </li>
                    </ul>
                </div>

                <h1 className="text-3xl font-bold text-gray-800">My Projects</h1>

                <div className="rounded-xl overflow-hidden p-5 m-5  
                shadow-lg shadow-gray-500 lg:flex justify-between bg-gray-50">

                    <a href="https://e-kart-iota.vercel.app/" target="_blank">
                        <img 
                            src="/E-Kart.png" 
                            alt="ecom" 
                            className="w-[500px] h-96 object-cover object-top rounded-xl shadow-xl
                            hover:blur-sm transition duration-300 cursor-pointer" 
                        />
                    </a>

                    <div className="flex flex-col justify-between space-y-4 items-center p-10">
                        <h1 className="text-xl font-bold text-gray-800">E-KART</h1>
                        <p className="w-64 text-gray-600 font-semibold">E-Kart is an online platform that allows you to shop different products from different categories i.e Gym, Books, Outfits, Electronics</p>
                        
                        <div className="flex justify-around">
                            <div className="shadow-lg p-3 rounded-lg"> React </div>
                            <div className="shadow-lg p-3 rounded-lg"> Tailwind </div>
                        </div>

                        <div className="flex justify-evenly space-x-4">
                            <a href="https://github.com/TheSh4h/E-COMMERCE-ReactJS" target="_blank" className="flex items-center text-gray-700 hover:text-black transition duration-200">
                                <span className="font-semibold pr-1">Code</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>

                            <a href="https://e-kart-iota.vercel.app/" target="_blank" className="flex items-center text-gray-700 hover:text-black transition duration-200">
                                <span className="font-semibold pr-1">Live Demo</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Car Rental */}

                <div className="rounded-xl overflow-hidden p-5 m-5  
                shadow-lg shadow-gray-500 lg:flex flex-row-reverse justify-between bg-gray-50">
                    <a href="https://car-rental-app-plum.vercel.app/" target="_blank">
                        <img 
                            src="/Rental.png" 
                            alt="ecom" 
                            className="w-[500px] h-96 object-cover object-top rounded-xl shadow-xl
                            hover:blur-sm transition duration-300 cursor-pointer" 
                        />
                    </a>

                    <div className="flex flex-col justify-between space-y-4 items-center p-10">
                        <h1 className="text-xl font-bold text-gray-800">CAR RENTAL</h1>
                        <p className="w-64 text-gray-600 font-semibold">Car Rental is an online platform which allows you to browse through wide variety of cars which are available for rent</p>
                        
                        <div className="flex justify-around">
                            <div className="shadow-lg p-3 rounded-lg"> React </div>
                            <div className="shadow-lg p-3 rounded-lg"> Tailwind </div>
                        </div>

                        <div className="flex justify-evenly space-x-4">
                            <a href="https://github.com/TheSh4h/Car-Rental-App" target="_blank" className="flex items-center text-gray-700 hover:text-black transition duration-200">
                                <span className="font-semibold pr-1">Code</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>

                            <a href="https://car-rental-app-plum.vercel.app/" target="_blank" className="flex items-center text-gray-700 hover:text-black transition duration-200">
                                <span className="font-semibold pr-1">Live Demo</span> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to='/contact'>
                        <div 
                            className="font-semibold px-16 py-5 bg-gray-800 text-white shadow-xl
                            border-2 border-gray-800 hover:bg-white hover:text-gray-800 transition duration-200 cursor-pointer">CONTACT ME NOW
                        </div>
                    </Link>
                    <p className="text-md text-gray-500 py-2">Hurry up before our schedule for the month is filled</p>
                </div>

            </div>
            
        </div>
     );
}
 
export default Web;