const Services = () => {
    return ( 
        <div className="container mx-auto p-5 lg:p-0 my-28 text-start">
            <h1 className="text-xl font-bold text-gray-800">Services I Offer</h1>
            <div className="flex flex-col md:flex-row justify-evenly items-center my-5">
                <div className="flex justify-evenly space-x-5">
                    <img width="64" height="64" src="https://img.icons8.com/external-nawicon-flat-nawicon/64/external-copywriting-seo-and-marketing-nawicon-flat-nawicon.png" alt="external-copywriting-seo-and-marketing-nawicon-flat-nawicon"/>
                    <div className="w-64 h-10">
                        <h1 className="text-lg font-semibold">Copywriting</h1>
                        <p className="text-sm text-gray-500">Bring in huge revenue through your emails, sale pages or landing pages by utilizing my persuasive copywriting skill</p>
                    </div>
                </div>

                <div className="flex space-x-5 mt-10 md:mt-0">
                    <img width="70" height="70" src="https://img.icons8.com/ios/100/laptop-coding.png" alt="laptop-coding"/>
                    <div className="w-64 h-10">
                        <h1 className="text-lg font-semibold">Web Development</h1>
                        <p className="text-sm text-gray-500">Get your high converting website and landing pages built now and give your brand a unique identity</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Services;