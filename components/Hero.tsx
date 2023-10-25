'use client';
import React from 'react';
import Image from 'next/image';
import appStore from "@/public/images/appStoreImage.png";
import {AiFillStar} from "react-icons/ai";
import {motion} from "framer-motion";
import leaf from "@/public/images/leaf.png";
import phone from '@/public/images/heroPhoneImage.png';
import pinkGhost from '@/public/images/heroPinkGhost.png';
import redGhost from '@/public/images/heroRedGhost.png';
import blueGhost from '@/public/images/heroBlueGhost.png';
import pinkMiniGhost from '@/public/images/heroPinkMiniGhost.png';
import redMiniGhost from '@/public/images/heroRedMiniGhost.png';
import blueMiniGhost from '@/public/images/heroBlueMiniGhost.png';


const Hero = () => {
    return (
        <div className={'px-10 pt-20'}>
            <div className={'overflow-hidden h-[42rem] bg-[#eeebfe] rounded-[2rem] flex w-full'}>
                <div className={'relative w-full lg:w-1/2 pl-14 flex flex-col gap-4 justify-center h-full'}>
                    <div className={'text-gray-900 font-medium text-xl'}>Ahead app</div>
                    <div className={'font-bold text-7xl'}>Master your life by mastering emotions</div>
                    <div className={'flex items-center gap-4'}>
                        <button className={'w-36'}>
                            <Image src={appStore} alt={''} className={''}/>
                        </button>
                        <div className={'py-4'}>
                            <div className={'flex items-center gap-2 text-yellow-400 text-2xl'}>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                            </div>
                            <div className={'text-gray-500 font-medium text-sm'}>100+ AppStore reviews</div>
                        </div>
                    </div>
                    <div className={'absolute top-10 right-10 w-48'}>
                        <div className={'flex justify-end'}>
                            <div className={'bg-[#f2c6c7] h-6 w-6 rounded-full'}></div>
                        </div>
                        <motion.div
                            className={'w-fit ml-10'}
                        >
                            <Image src={leaf} alt={''} className={'w-16'}/>
                        </motion.div>
                        <div className={'bg-[#f8d2bc] h-12 w-12 rounded-full flex items-center justify-center'}>
                            <div className={'bg-[#eb6555] w-4 h-4 rounded-full'}></div>
                        </div>
                    </div>
                    <div className={'absolute -top-8 -rotate-[30deg] left-1/6'}>
                        <motion.div
                            className={'w-fit ml-10'}
                        >
                            <Image src={leaf} alt={''} className={'w-24'}/>
                        </motion.div>
                    </div>
                    <div className={'absolute left-0 bottom-1/3 -translate-x-1/2'}>
                        <div className={'bg-[#f3c7c8] rounded-full w-10 h-10'}></div>
                    </div>
                    <div className={'absolute bottom-0 left-2/3 translate-y-1/2'}>
                        <div className={'bg-[#eb695b] rounded-full w-10 h-10'}></div>
                    </div>
                </div>
                <div className={'relative flex justify-center items-center w-1/2'}>
                    <div className={'relative p-[4.5rem] rounded-full'}>
                        <div className={'bg-[#e2dbfd] w-[25rem] h-[25rem] rounded-full'}>
                        </div>
                        <div className={'z-10 absolute -bottom-4'}>
                            <Image src={pinkGhost} alt={''}/>
                        </div>
                        <div className={'z-10 absolute top-0'}>
                            <Image src={blueGhost} alt={''}/>
                        </div>
                        <div className={'z-10 absolute top-1/3 -right-8'}>
                            <Image src={redGhost} alt={''}/>
                        </div>
                        <div className={'z-10 absolute -left-4 top-1/2'}>
                            <Image src={pinkMiniGhost} alt={''}/>
                        </div>
                        <div className={'z-10 absolute -top-2 right-48'}>
                            <Image src={blueMiniGhost} alt={''}/>
                        </div>
                        <div className={'z-10 absolute bottom-20 right-12'}>
                            <Image src={redMiniGhost} alt={''}/>
                        </div>
                    </div>
                    <div className={'absolute'}>
                        <svg width="550" height="550" viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="275" cy="275" r="273.5" stroke="white" stroke-width="3" stroke-dasharray="20 20"/>
                        </svg>
                    </div>
                    <div className={'absolute left-20'}>
                        <Image src={phone} alt={''} className={''}/>
                    </div>
                    <div className={'absolute top-0 left-1/2 -translate-y-1/2'}>
                        <div className={'bg-[#f3c7c8] rounded-full w-10 h-10'}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;