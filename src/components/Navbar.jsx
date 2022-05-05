import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNave = () => {
        setNav(!nav)
    }

    return (
        <div className="w-full h-[90px] bg-black">
            <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
                <div>
                    <h1 className="text-[color:var(--primary-blue)]">DEFI</h1>    
                </div>
                <div className='hidden md:flex'>
                    <ul className="flex text-white items-center">
                        <li>Platform</li>
                        <li>Developers</li>
                        <li>Community</li>
                        <li>About</li>

                        <button className="ml-4">Use Defi</button>
                    </ul>
                </div>
                <div onClick={handleNave} className='block md:hidden'>
                    {!nav? <AiOutlineMenu size={30} className=" text-white"/> : <AiOutlineClose size={30} className=" text-white"/> }
                </div>
                {/* mobile menu */}
                <div className={nav? 'w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center': 'absolute left-[-100%]'}>
                    <ul>
                        <li className='text-2xl border-b'>Platform</li>
                        <li className='text-2xl border-b'>Developers</li>
                        <li className='text-2xl border-b'>Community</li>
                        <li className='text-2xl border-b'>About</li>
                        
                        <button className="m-8">Use Defi</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar