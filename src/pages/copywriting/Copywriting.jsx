const Copywriting = () => {
    return ( 
        <div className="p-5 h-screen">
            <div className="container mx-auto my-10">
                <div className="flex justify-center items-center space-x-5">
                    <img src="/swords.png" alt=" swords" className="w-14 h-14" />
                    <h1 className="text-xl font-bold py-10">Copy Prepared for Battle - Check 'em out</h1>
                </div>
                <a href="https://docs.google.com/document/d/1PB5e_vCGzknwa1733f3HAMfH55nohAw4iPiDygOB9OY/edit?usp=sharing" target='_blank'>
                    <div 
                    className="flex justify-between text-start py-8
                    border-t border-gray-800 p-4 hover:bg-gray-100 hover:shadow-md
                    transition duration-300">
                        <h1 className="text-md font-bold">Web Development Service</h1>
                        <h1 className="text-md font-semibold text-gray-800">Not closing deals? Become Authentic…</h1>
                    </div>
                </a>

                <a href="https://docs.google.com/document/d/1s7adxY2oLg3wTNfs9f6TvCF_2tjAl3Mnjq2G1fwJw4c/edit?usp=sharing" target='_blank'>
                    <div 
                    className="flex justify-between text-start py-8
                    border-t border-gray-800 p-4 hover:bg-gray-100 hover:shadow-md
                    transition duration-300">
                        <h1 className="text-md font-bold">Protein Supplement</h1>
                        <h1 className="text-md font-semibold text-gray-800">Eating less = Big Muscles…?</h1>
                    </div>
                </a>

                <a href="https://docs.google.com/document/d/1J3b2dgeuGn8ThHzQfoRcOyvljhK8DhKdWCz2t0yckDQ/edit?usp=sharing" target='_blank'>
                    <div 
                    className="flex justify-between text-start py-8
                    border-t border-gray-800 p-4 hover:bg-gray-100 hover:shadow-md
                    transition duration-300">
                        <h1 className="text-md font-bold">Solar Panels</h1>
                        <h1 className="text-md font-semibold text-gray-800">Save Up To 79% on Your Electricity Bills</h1>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default Copywriting;