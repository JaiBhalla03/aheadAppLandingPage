import React from 'react';
import Image from 'next/image';
import logo from '../public/images/ahead-logo.png';
import appStore from '../public/images/appStoreImage.png';
import {FaLocationDot} from "react-icons/fa6";
import {HiMail} from "react-icons/hi";


const Download = () => {
    return (
        <div className={'py-10 border-t-2 flex flex-col gap-2 md:gap-5 items-center border-solid p-1 border-gray-200'}>
            <div className={'flex flex-col items-center gap-2'}>
                <Image src={logo} alt={''}/>
                <div className={'text-[#6d4cf2] text-2xl font-semibold'}>ahead</div>
            </div>
            <div className={'flex flex-col md:flex-row items-center gap-2 md:gap-8'}>
                <div className={'cursor-pointer hover:underline font-medium text-md flex gap-2 items-center'}>
                    <FaLocationDot size={24} className={'bg-cyan-400 rounded-full p-1'}/>
                    AugustraBe 26, 10117 Berlin
                </div>
                <div className={'cursor-pointer hover:underline font-medium text-md flex gap-2 items-center'}>
                    <HiMail size={24} className={'bg-cyan-400 rounded-full p-1'}/>
                    hi@ahead-app.com
                </div>
            </div>
            <div className={'w-32'}>
                <button className={''}>
                    <Image src={appStore} alt={''} className={''}/>
                </button>
            </div>
            <div className={'font-medium text-gray-500 text-xs'}>
                © Ahead App. All right reserved.
            </div>
        </div>
    );
};

export default Download;