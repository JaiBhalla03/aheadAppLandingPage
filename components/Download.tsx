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
                <a href="https://www.google.com/maps/place/Auguststra%C3%9Fe+26,+10117+Berlin,+Germany/@52.5268292,13.3947187,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851e6651b0b35:0x2b8901174ec8a98a!8m2!3d52.526826!4d13.3972936!16s%2Fg%2F11bw4z7079?entry=ttu" target="_blank" className={'cursor-pointer hover:underline font-medium text-md flex gap-2 items-center'}>
                    <FaLocationDot size={24} className={'bg-cyan-400 rounded-full p-1'}/>
                    Augustraβe 26, 10117 Berlin
                </a>
                <a href="mailto:hi@ahead-app.com" className={'cursor-pointer hover:underline font-medium text-md flex gap-2 items-center'}>
                    <HiMail size={24} className={'bg-cyan-400 rounded-full p-1'}/>
                    hi@ahead-app.com
                </a>
            </div>
            <div className={'w-32'}>
                <a href={'https://apps.apple.com/us/app/ahead-emotions-coach/id1570430177?mt=8'} target="_blank" className={''}>
                    <Image src={appStore} alt={''} className={''}/>
                </a>
            </div>
            <div className={'font-medium text-gray-500 text-xs'}>
                © Ahead App. All right reserved.
            </div>
        </div>
    );
};

export default Download;