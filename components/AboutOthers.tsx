'use client';
import React from 'react';
import Image from 'next/image';
import badge1 from '../public/images/badge1.png';
import badge2 from '../public/images/badge2.png';
import badge3 from '../public/images/badge3.png';
import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";
import BadgeDescription from "@/components/BadgeDescription";

const AboutOthers = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const otherVariants1 = {
        hidden :{
            scale: 0,
        },
        visible: {
            x: '-100%',
            y: '-100%',
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.6,
                type: 'spring',
                stiffness: 100
            }
        }
    }
    const otherVariants2 = {
        hidden :{
            scale: 0,
        },
        visible: {
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.8,
                type: 'spring',
                stiffness: 100
            }
        }
    }
    const otherVariants3 = {
        hidden :{
            scale: 0,
        },
        visible: {
            scale: 1,
            y: '-100%',
            transition: {
                duration: 0.5,
                delay: 1,
                type: 'spring',
                stiffness: 100
            }
        }
    }

    const otherVariants4 = {
        hidden :{
            scale: 0,
        },
        visible: {
            scale: 1,
            x: '100%',
            transition: {
                duration: 0.5,
                delay: 0.8,
                type: 'spring',
                stiffness: 100
            }
        }
    }


    return (
        <div className={'px-0 xl:px-10 pt-20'}>
            <div className={'bg-[#edf8fe] rounded-[2rem] p-4 md:p-28 flex flex-col gap-2 sm:gap-4'}>
                <div className={'flex items-center text-center justify-center text-md md:text-xl font-medium'}>
                    Let your friends, family, and co-workers (anonymously) rate your social skills.
                </div>
                <div className={'flex items-center text-center justify-center text-2xl sm:text-3xl md:text-5xl font-bold'}>
                    Ever wondered what others think of you?
                </div>
                <div className={'hidden lg:block relative line w-fit mx-auto mt-20'}>
                    <svg width="800" height="4" viewBox="0 0 828 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M797.526 2C1035.43 1.99998 -203.664 1.99998 29.2864 2" stroke="#f3d7a8" stroke-width="3" stroke-dasharray="20 20"/>
                    </svg>
                    <div
                        className={'absolute -left-4 -translate-x-1/2 -translate-y-1/2'}
                    >
                        <BadgeDescription badge={badge1} heading={'Answers question on your social skills'}/>
                    </div>
                    <div
                        className={'absolute left-1/2 -translate-x-1/2 -translate-y-1/2'}

                    >
                        <BadgeDescription badge={badge2} heading={'Let others anonymously answer the same question about you'}/>
                    </div>
                    <div
                        className={'absolute -right-4 translate-x-1/2 -translate-y-1/2'}
                    >
                        <BadgeDescription badge={badge3} heading={'Find out where you and others see things the same way - and where not!'}/>
                    </div>
                </div>
                <div className={'flex h-96 flex-col gap-10 items-center lg:hidden'}>
                    <BadgeDescription badge={badge1} heading={'Answers question on your social skills'}/>
                    <BadgeDescription badge={badge2} heading={'Let others anonymously answer the same question about you'}/>
                    <BadgeDescription badge={badge3} heading={'Find out where you and others see things the same way - and where not!'}/>
                </div>
                <div className={'hidden md:flex justify-center mt-32'}>
                    <div className={'shadow-gray-200 shadow-xl bg-white h-64 w-[50rem] rounded-2xl flex justify-center items-center p-10'}>
                        <div className={'relative border-t-2 border-gray-400 border-solid w-full'}>
                            <motion.div
                                className={'absolute top-2 left-3 flex flex-col gap-4 items-end'}
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={otherVariants1}
                            >
                                <div className={'px-5 py-3 rounded-xl bg-[#6341ef] text-white font-semibold'}>
                                    You
                                </div>
                                <div className={'h-5 w-5 bg-[#6341ef] rounded-full'}></div>
                            </motion.div>
                            <motion.div
                                className={'absolute -top-2 left-1/4 flex flex-col gap-4 items-start'}
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={otherVariants2}
                            >
                                <div className={'h-5 w-5 bg-[#40c2fc] rounded-full'}></div>
                                <div className={'px-5 py-3 rounded-xl bg-[#40c2fc] text-white font-semibold'}>
                                    Anonymonos 1
                                </div>
                            </motion.div>
                            <motion.div
                                className={'absolute top-2 left-[60%] flex flex-col gap-4 items-start'}
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={otherVariants3}
                            >
                                <div className={'px-5 py-3 rounded-xl bg-[#fdb338] text-white font-semibold'}>
                                    Anonymonos 2
                                </div>
                                <div className={'h-5 w-5 bg-[#fdb338] rounded-full'}></div>
                            </motion.div>
                            <motion.div
                                className={'absolute -top-2 translate-x-[100%] right-2 flex flex-col gap-4 items-start'}
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={otherVariants4}
                            >
                                <div className={'h-5 w-5 bg-[#58c896] rounded-full'}></div>
                                <div className={'px-5 py-3 rounded-xl bg-[#58c896] text-white font-semibold'}>
                                    Anonymonos 3
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutOthers;