import { BsChevronDown, BsSearch, BsBell } from 'react-icons/bs'
import { useCallback, useState } from "react";

import NavbarItem from "./NavbarItem"
import MobileMenu from "./MobileMenu"
import AccountMenu from './AccountMenu';

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);


    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current: any) => !current);
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current: any) => !current);
    }, []);

    return (
        <nav className="w-full fixed z-40">
            <div className="
            px-4
            md:px-16
            py-6
            flex
            flex-row
            items center
            transition
            duration-500
            bg-zinc-900
            bg-opacity-90
            ">
             <img className="h-4 lg:h-7" src="/images/logo.png" alt="logo" />   
             <div 
                className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex">

                < NavbarItem label="Início" />
                < NavbarItem label="Séries" />
                < NavbarItem label="Filmes" />
                < NavbarItem label="Minha lista" />
             </div>
             <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Menu</p>
                < BsChevronDown className={` text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                <MobileMenu visible ={showMobileMenu}/>
             </div>
             <div className='flex felx-row ml-auto gap-7 items-center'>
                <div className=' text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                    <BsSearch/>
                </div>
                <div className=' text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                    <BsBell/>
                </div>

                <div onClick={toggleAccountMenu} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                    <div  className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <img src="/images/default-red.png" alt="" />
                    </div>
                    < BsChevronDown className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <AccountMenu visible={showAccountMenu} />
                </div>
             </div>
            </div>
        </nav>
    )
}

export default Navbar