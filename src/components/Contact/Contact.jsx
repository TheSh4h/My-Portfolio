const Contact = () => {
    return ( 
        <div className="container mx-auto p-5 lg:p-0 my-10">

            <div className="flex flex-col text-start">
                <h1 className="font-bold text-xl text-gray-800">Don't be Shy! Hit me Up! 👇</h1>
                <div className="flex m-5">
                    <img src="/mail.png" alt="mail" className="h-[40px] w-[40px]" />
                    <div className="text-start ml-2">
                        <a href="mailto:hh.haseebshah@gmail.com" target="_blank">
                            <h1 className="font-semibold text-gray-800 text-sm">Mail</h1>
                            <p className="text-gray-500 text-xs">hh.haseebshah@gmail.com</p>
                        </a>
                    </div>
                </div>

                <h1 className="font-bold text-xl text-gray-800">Connect with me 👇</h1>

               <div className="flex m-5 space-x-5">
                    <a href="https://www.instagram.com/thepitchsmith/" target="_blank">
                        <img src="/instagram.png" alt="instagram" className="h-[40px] w-[40px]" />
                    </a>
                    <a href="https://twitter.com/ThePitchSmith" target="_blank">
                        <img src="/x.png" alt="x" className="h-[40px] w-[40px]" />
                    </a>
               </div>
            </div>
        </div>
     );
}
 
export default Contact;