'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import logo from '../public/images/ahead-logo.png'
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetClose} from "@/components/ui/sheet";


const Navbar = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
    }, []);
    if(!isMounted){
        return null;
    }
    return (
        <nav className={'z-30 fixed bg-white py-2 md:py-3 px-2 md:px-10 lg:px-20 flex w-full justify-between items-center'}>
            <div className={'h-10 md:h-12 w-10 md:w-12'}>
                <Image src={logo} alt={''}/>
            </div>
            <ul className={'hidden md:flex items-center gap-2 sm:gap-4 lg:gap-8 font-semibold text-gray-700 text-sm'}>
               <li>Emotions</li>
               <li>Manifesto</li>
                <li>Self-awareness test</li>
                <li>Work With Us</li>
            </ul>
            <div className={'hidden md:flex items-center justify-center'}>
                <button className={'bg-black text-gray-100 rounded-full px-6 py-3 text-sm font-semibold'}>
                    Download app
                </button>
            </div>
            <div className={'block md:hidden text-black'}>
                <Sheet>
                    <SheetTrigger>
                        <button
                            className={'md:hidden'}

                        >
                            <Menu className={'h-8 w-8 text-gray-800'}/>
                        </button>
                    </SheetTrigger>
                    <SheetContent side={'left'} className={''}>
                        <div className={'h-10 w-10'}>
                            <Image src={logo} alt={''}/>
                        </div>
                        <div className={'pt-20 flex flex-col gap-8'}>
                            <ul className={'text-gray-700 flex flex-col gap-8'}>
                                <li>Emotions</li>
                                <li>Manifesto</li>
                                <li>Self-awareness test</li>
                                <li>Work With Us</li>
                            </ul>
                            <div className={'flex items-center'}>
                                <button className={'bg-black text-gray-100 rounded-full px-6 py-3 text-sm font-semibold'}>
                                    Download app
                                </button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default Navbar;