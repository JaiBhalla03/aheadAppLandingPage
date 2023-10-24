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
        triggerOnce: false
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
            x: 100,
            y: -100
        },
        visible: {
            x:0,
            y:0,
            transition: {
                duration: 3
            }
        }
    }

    const backgroundDivVariants = {
        hidden: {
            x: 300,
            y: -50,
        },
        visible: {
            x: 0,
            y: 0,
            transition: {
                duration: 3
            }
        },
    }

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
        <div className={'relative pt-10 px-10'}>
            <div className={'relative bg-[#fef7f1] flex h-screen rounded-[2rem] overflow-hidden flex px-14 py-32'}>
                <div className={'w-full md:w-7/12 flex flex-col gap-4'}>
                    <motion.div
                        className={'flex flex-col gap-4'}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={headingVariants}
                    >
                        <div className={'font-semibold'}>Built out of frustration</div>
                        <div className={'font-bold text-6xl'}>Meet the ahead app</div>
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
                                <Image src={ghost} alt={''} className={'w-32 h-32'}/>
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
                            <div className={'absolute bottom-0 -right-32 w-32'}>
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
                    className={'w-full md:w-5/12 text-xl flex flex-col justify-end gap-4 pt-10 h-full'}
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
                    className={'h-72 w-72 bg-[#fae8dc] absolute -left-20 bottom-8 rounded-full'}
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
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