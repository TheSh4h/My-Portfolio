const About = () => {
    return ( 
        <div className="container mx-auto my-16 flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-around">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-2 border-black mb-10">
                    <img src="/Haseeb.jpg" className="w-full h-full object-cover" alt="Haseeb Shah"></img>
                </div>

                <div className="text-center">
                    <p className="text-gray-500 text-xl">Freelancer</p>
                    <h1 className="text-5xl font-bold">Haseeb Shah</h1>
                    <p className="w-80 mt-3">Hey there! I'm your friendly neighborhood freelancer.</p>
                    <p className="w-80 mt-3">Armed with a keyboard for writing persuasive copy and developing websites.</p>
                    <p className="w-80 my-3">Let's give your brand a special touch and maybe even make your competitors jealous.</p>
                    <button 
                        className="bg-gray-800 text-white font-bold px-10 py-4 rounded-full
                            border-2 border-gray-800 shadow-2xl hover:bg-white hover:text-gray-800 transition"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default About;
