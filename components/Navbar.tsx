'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import logo from '../public/images/ahead-logo.png'
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, SheetClose} from "@/components/ui/sheet";
import Link from "next/link";


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
               <Link href={'/#emotions'} className={'cursor-pointer hover:underline'}>Emotions</Link>
               <Link href={'/#manifesto'} className={'cursor-pointer hover:underline'}>Manifesto</Link>
                <Link href={'/#test'} className={'cursor-pointer hover:underline'}>Self-awareness test</Link>
                <Link href={'/#workwithus'} className={'cursor-pointer hover:underline'}>Work With Us</Link>
            </ul>
            <div className={'hidden md:flex items-center justify-center'}>
                <a href={'https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8'} target="_blank" className={'cursor-pointer bg-black text-gray-100 rounded-full px-6 py-3 text-sm font-semibold'}>
                    Download app
                </a>
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
                                <Link href={'/#emotions'} className={'cursor-pointer hover:underline'}>Emotions</Link>
                                <Link href={'/#manifesto'} className={'cursor-pointer hover:underline'}>Manifesto</Link>
                                <Link href={'/#test'} className={'cursor-pointer hover:underline'}>Self-awareness test</Link>
                                <Link href={'/#workwithus'} className={'cursor-pointer hover:underline'}>Work With Us</Link>
                            </ul>
                            <div className={'flex items-center'}>
                                <a href={'https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8'} target="_blank" className={'bg-black text-gray-100 rounded-full px-6 py-3 text-sm font-semibold'}>
                                    Download app
                                </a>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
};

export default Navbar;