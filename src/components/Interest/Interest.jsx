//import './Interest.css'

const Interest = () => {
    return ( 
        <div className="container mx-auto text-start p-5 lg:p-0">
            <h1 className="text-xl font-bold text-gray-800">Why Me</h1>

            <ul className='my-5 p-3 text-gray-500 text-md'>
                <li className="flex items-center p-2">
                    <img src="/bullet.png" alt="bullet" className="h-[30px] w-[30px] mr-1" />
                    <p>Giving your brand a unique identity so you stand out in the crowd</p>
                </li>
                <li className="flex items-center p-2">
                    <img src="/bullet.png" alt="bullet" className="h-[30px] w-[30px] mr-1" />
                    <p>Ensuring that you win big time and bring in huge revenue because your success is a win-win for both of us</p>
                </li>
                <li className="flex items-center p-2">
                    <img src="/bullet.png" alt="bullet" className="h-[30px] w-[30px] mr-1" />
                    <p>On time delivery 'cause I'm fast af</p>
                </li>
            </ul>
        </div>
     );
}
 
export default Interest;