'use client';
import React from 'react';
import Image from 'next/image';
import flower from '../public/images/flower.png';
import leaf from '../public/images/leaf.png';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import ghost from '../public/images/pink_Ghost_image_build.png';
import badge from '../public/images/badge.png'

const Build = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    const headingVariants = {
        hidden: {
            scale: 0,
            transformOrigin: 'top left', // Set the transform origin
        },
        visible: {
            scale: 1,
            transition: { type: "spring", stiffness: 100, duration: 2 }
        },
    };

    const imageVariants = {
        hidden: {
            x: -100,
            rotate: 90,
            opacity: 0
        },
        visible: {
            x:0,
            rotate: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    const backgroundDivVariants = {
        hidden: {
            x: 500,
            y: 300,
        },
        mid1: {
            x: 150, // Define the x and y positions for the first mid state
            y: 300,
            transition: {
                duration: 1, // Adjust the duration as needed
            },
        },
        mid2: {
            x: 75, // Define the x and y positions for the second mid state
            y: 300,
            transition: {
                duration: 1, // Adjust the duration as needed
            },
        },
        visible: {
            x: 0,
            y: 0,
            transition: {
                duration: 3,
            },
        },
    };


    const badgeVariants = {
        hidden: {
            scale: 0,
            x: '-50%',
            y: '100%'
        },
        visible:{
            x: '-50%',
            scale: 1,
            y:0,
            transition: { type: "spring", stiffness: 100, duration: 0.5, delay:2 }
        }
    }

    return (
        <div id={'manifesto'} className={'relative pt-10 px-0 xl:px-10'}>
            <div className={'relative bg-[#fef7f1] flex md:h-screen rounded-[2rem] overflow-hidden flex flex-col md:flex-row px-4 md:px-14 py-20 md:py-32'}>
                <div className={'block md:hidden'}>
                    <div
                    >
                        <div className={'font-semibold'}>Built out of frustration</div>
                        <div className={'font-bold text-3xl sm:text-5xl'}>Meet the ahead app</div>
                    </div>
                    <div
                    >
                        <div className={'text-gray-700 font-medium'}>
                            A personalized pocket coach that provides bite-sized, science driven tools to boast emotional intelligence.
                        </div>
                        <div className={'text-gray-700 font-medium'}>
                            Think of it as a pocket cheerleader towards a better, more fulfilling.
                        </div>
                    </div>
                </div>
                <div className={'hidden md:w-7/12 md:flex flex-col gap-4'}>
                    <motion.div
                        className={'flex flex-col gap-4'}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={headingVariants}
                    >
                        <div className={'font-semibold'}>Built out of frustration</div>
                        <div className={'font-bold text-3xl md:text-6xl'}>Meet the ahead app</div>
                    </motion.div>
                    <motion.div
                        className={'flex'}
                        ref={ref}
                        initial={"hidden"}
                        animate={inView ? 'visible': 'hidden'}
                        variants={imageVariants}
                    >
                        <div className={'z-10 p-4 bg-[#f6f6f6] w-fit rounded-full p-8 ml-20 mt-14 relative'}>
                            <div className={'bg-white flex w-fit rounded-full p-8'}>
                                <Image src={ghost} alt={''} className={'z-10 w-32 h-32'}/>
                            </div>
                            <motion.div
                                className={'absolute -top-6 left-1/2'}
                                ref={ref}
                                initial={"hidden"}
                                animate={inView ? 'visible': 'hidden'}
                                variants={badgeVariants}
                            >
                                <Image src={badge} alt={''} className={'w-14 h-14'}/>
                            </motion.div>
                            <div className={'absolute hidden lg:block bottom-0 -right-32 w-32'}>
                                <div className={'flex justify-end'}>
                                    <div className={'bg-[#f2c6c7] h-8 w-8 rounded-full'}></div>
                                </div>
                                <motion.div
                                    className={'w-fit ml-4'}
                                    animate={{
                                        rotate: -360, // Specify the rotation angle (in degrees)
                                    }}
                                    transition={{
                                        duration: 1.5, // Adjust the duration as needed
                                        repeat: Infinity, // Infinite loop
                                        ease: "linear", // Linear animation
                                    }}
                                >
                                    <Image src={leaf} alt={''}/>
                                </motion.div>
                                <div className={'bg-[#f8d2bc] h-14 w-14 rounded-full flex items-center justify-center'}>
                                    <div className={'bg-[#eb6555] w-4 h-4 rounded-full'}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className={'w-full md:w-5/12 text-xl hidden md:flex flex-col justify-end gap-4 pt-10 h-full'}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={headingVariants}
                >
                    <div className={'text-gray-700 font-medium'}>
                        A personalized pocket coach that provides bite-sized, science driven tools to boast emotional intelligence.
                    </div>
                    <div className={'text-gray-700 font-medium'}>
                        Think of it as a pocket cheerleader towards a better, more fulfilling.
                    </div>
                </motion.div>
                <motion.div
                    className={'absolute top-14 right-28'}
                    animate={{
                        rotate: -360, // Specify the rotation angle (in degrees)
                    }}
                    transition={{
                        duration: 1.5, // Adjust the duration as needed
                        repeat: Infinity, // Infinite loop
                        ease: "linear", // Linear animation
                    }}
                >
                    <Image src={leaf} alt={''}/>
                </motion.div>
                <motion.div
                    className={'hidden md:block h-72 w-72 bg-[#fae8dc] absolute -left-32 bottom-4 rounded-full'}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? ['mid1', 'mid2', 'visible'] : 'hidden'}
                    variants={backgroundDivVariants}
                >
                </motion.div>
            </div>
            <motion.div
                className={'absolute top-4 right-28'}
                animate={{
                    rotate: -360, // Specify the rotation angle (in degrees)
                }}
                transition={{
                    duration: 1.5, // Adjust the duration as needed
                    repeat: Infinity, // Infinite loop
                    ease: "linear", // Linear animation
                }}
            >
                <Image src={flower} alt={''} className={''}/>
            </motion.div>
        </div>
    );
};

export default Build;