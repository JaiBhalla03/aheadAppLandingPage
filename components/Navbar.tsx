import React from 'react';
import Image from "next/image";
import logo from '../public/images/ahead-logo.png'

const Navbar = () => {
    return (
        <nav className={'px-2 md:px-10 flex w-full items-center'}>
            <div>
                <Image src={logo} alt={''}/>
            </div>
            <div>

            </div>
            <div>

            </div>
        </nav>
    );
};

export default Navbar;