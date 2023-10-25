'use client';
import React from 'react';
import Image from 'next/image';
import ghost from '../public/images/pink_ghost_image_workWithUs.png';
import WorkWithCard from "@/components/WorkWithCard";
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";

const WorkWithUs = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const headingVariants1 = {
        hidden :{
            scaleX: 0,
            x:-100,
        },
        visible: {
            scaleX: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.6,
                type: 'spring',
                stiffness: 100
            }
        }
    }

    const imageVariant = {
        hidden :{
            scale: 0.5,
            rotate: 45
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.5,
                delay: 0.6,
                type: 'spring',
                stiffness: 100
            }
        }
    }

    const headingVariants2 = {
        hidden :{
            scaleX: 0,
            x:100,
        },
        visible: {
            scaleX: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.6,
                type: 'spring',
                stiffness: 100
            }
        }
    }
    return (
        <div id={'workwithus'} className={'px-0 lg:px-10 pt-10'}>
            <div className={'overflow-hidden bg-[#f3f1ff] lg:h-[47rem] px-2 md:px-14 py-20 w-full rounded-[2rem]'}>
                <div>
                    <div className={'flex flex-col md:flex-row w-full justify-between'}>
                        <motion.h1
                            className={'text-5xl font-semibold text-center md:text-start'}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={headingVariants1}

                        >Work with us</motion.h1>
                        <motion.h1
                            className={'text-5xl font-semibold text-[#613eef] lg:pr-10 text-center md:text-start'}
                            ref={ref}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={headingVariants2}
                        >ahead</motion.h1>
                    </div>
                    <div className={'flex flex-col lg:flex-row w-full'}>
                        <div className={'w-full lg:w-1/2 bg-white h-fit pt-10 rounded-[2rem] mt-10 flex flex-col gap-4'}>
                            <div
                                className={'flex justify-center md:justify-start md:px-14'}
                            >
                                <motion.div
                                    className={'w-fit'}
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={imageVariant}
                                >
                                    <Image src={ghost} alt={''} className={'w-14 h-16'}/>
                                </motion.div>
                            </div>
                            <div className={'flex flex-col items-center md:items-start gap-2 px-4 md:px-14'}>
                                <div className={'font-semibold text-2xl'}>About</div>
                                <div className={'text-center md:text-start text-gray-600 text-xl leading-relaxed'}>At ahead out goal is to make self-improvement fun and lasting. We know there's a way to make it work. And that's what aHead is all about!</div>
                            </div>
                            <div className={'flex flex-col items-center md:items-start  gap-2 bg-[#fef7f1] rounded-[2rem] px-4 md:px-14 py-8'}>
                                <div className={'font-semibold text-2xl'}>Product</div>
                                <div className={'text-center md:text-start text-gray-600 text-xl leading-relaxed'}>Sure, you could spend ages, reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</div>
                            </div>
                        </div>
                        <div className={'mt-10 md:pr-10 w-full lg:w-1/2 h-[40rem] overflow-y-scroll custom-scrollbar'}>
                            <div className={'flex flex-col gap-4 items-end'}>
                                <WorkWithCard heading={'Power through, even when the going gets tough'} description={'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.'}/>
                                <WorkWithCard heading={'Learn more about who you are and where you want to go'} description={'We ask the right questions to help you better understand why you do things the way you do,'}/>
                                <WorkWithCard heading={'Play and grow together with others on the same journey'} description={'Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!'}/>
                                <WorkWithCard heading={'Power through, even when the going gets tough'} description={'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.'}/>
                                <WorkWithCard heading={'Learn more about who you are and where you want to go'} description={'We ask the right questions to help you better understand why you do things the way you do,'}/>
                                <WorkWithCard heading={'Play and grow together with others on the same journey'} description={'Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!'}/>
                                <WorkWithCard heading={'Power through, even when the going gets tough'} description={'We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.'}/>
                                <WorkWithCard heading={'Learn more about who you are and where you want to go'} description={'We ask the right questions to help you better understand why you do things the way you do,'}/>
                                <WorkWithCard heading={'Play and grow together with others on the same journey'} description={'Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkWithUs;