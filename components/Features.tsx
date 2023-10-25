'use client';
import React from 'react';
import SubFeature from "@/components/SubFeature";
import Image from 'next/image';
import ghostImage from '../public/images/pink_ghost_image_features.png'
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";
import Slider from "@/components/Slider";

const Features = () => {
    const { ref, inView } = useInView({
            triggerOnce: true
    });

    const imageVariants = {
        hidden: {
            x: 300,
            y: 0,
            rotate: -90,
        },
        visible: {
            x: 0,
            y: 0,
            rotate: 0,
            transition: {
                duration: 1.5, // Adjust the duration as needed
                ease: [0.6, 0.05, 0.01, 1],
                path: [
                    {
                        x: 300,
                        y: 0,
                    },
                    {
                        x: 150,
                        y: -50,
                    },
                    {
                        x: 0,
                        y: 0,
                    },
                ],
            },
        },
    };

    const headingVariants = {
        hidden: {
            scale: 0,
            transformOrigin: 'top left', // Set the transform origin
        },
        visible: {
            scale: 1,
            transition: {
                duration: 1.5, // Same duration as the image animation
                ease: [0.6, 0.05, 0.01, 1],
                bounce: 0.5, // Add bounce effect
            },
        },
    };


    return (
        <div id={'emotions'}>
            <SubFeature
                sectionOne={'People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.'}
                sectionTwo={'They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.'}
            />
            <div className={'px-4 pt-10 pb-4 md:pt-14 md:pb-4 lg:pt-20 lg:px-20 lg:pb-4'}>
                <div className={'flex items-center gap-4 lg:gap-8'}>
                    <motion.h1
                        className={'text-3xl md:text-4xl lg:text-5xl font-bold'}
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={headingVariants}
                    >
                        Does this sound familiar...
                    </motion.h1>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={imageVariants}
                        className={'pb-4'}
                    >
                        <Image src={ghostImage} alt={''} />
                    </motion.div>
                </div>
            </div>
            <Slider/>
        </div>
    );
};

export default Features;