const Contact = () => {
    return ( 
        <div>
            <h1 className="font-bold text-xl text-gray-800">Don't be Shy! Hit me Up! 👇</h1>

            <div className="flex justify-center space-x-5">
                <img src="/instagram.png" alt="instagram" className="h-[40px] w-[40px]" />
                <img src="/x.png" alt="x" className="h-[40px] w-[40px]" />
                <div className="flex items-center">
                    <img src="/mail.png" alt="mail" className="h-[40px] w-[40px]" />
                    <div className="text-start ml-2">
                        <h1 className="font-semibold text-gray-800 text-sm">Mail</h1>
                        <p className="text-gray-500 text-xs">hh.haseebshah@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;