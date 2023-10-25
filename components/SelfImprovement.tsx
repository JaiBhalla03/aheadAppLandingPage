'use client'
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import selfBlueGhost from '@/public/images/heroBlueGhost.png';
import SelfImprovementCard from '@/components/SelfImprovementCard';
import { selfImprovementCardData } from '@/data';
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";


const SelfImprovement = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    const headingVariant = {
        hidden: {
            scaleX: 0,
            opacity: 0,
        },
        visible:{
            scaleX: 1,
            opacity: 1,
            transition: {duration: 1}
        }
    }

    const imageVariant = {
        hidden: {
            x: 500,
            rotate: -90,
        },
        visible:{
            x: 0,
            rotate: 0,
            transition: {duration: 1}
        }
    }
    // Calculate the active card based on the scroll position within the container
    const handleScroll = () => {
        const container = scrollContainerRef.current as HTMLDivElement | null;
        if (!container) return;

        const containerHeight = container.clientHeight;
        const scrollPosition = container.scrollTop;

        // Calculate the approximate height of each card
        const cardHeight = containerHeight / selfImprovementCardData.length;

        // Determine the active index based on the scroll position
        const newActiveIndex = Math.floor(scrollPosition / cardHeight);

        if (newActiveIndex !== activeIndex) {
            setActiveIndex(newActiveIndex);
        }
    };

    return (
        <div className={'px-4 py-10 md:p-14 xl:p-20'}>
            <div className={'flex flex-col'}
            >
                <motion.div
                    className={'text-sm md:text-xl font-medium'}
                    ref={ref}
                    initial='hidden'
                    animate={inView ? 'visible' : 'hidden'}
                    variants={headingVariant}
                >What's wrong with self-improvement & how we're fixing it.</motion.div>
                <div className={'flex gap-4 sm:gap-8'}>
                    <motion.div
                        className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center'}
                        ref={ref}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        variants={headingVariant}
                    >Self-improvement. Ugh</motion.div>
                    <motion.div
                        ref={ref}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        variants={imageVariant}
                    >
                        <Image src={selfBlueGhost} alt={''} />
                    </motion.div>
                </div>
            </div>
            <div
                className={'px-4 md:px-14 lg:px-32 xl:px-40 py-10 h-[30rem] overflow-y-scroll custom-scrollbar2'}
                ref={scrollContainerRef}
                onScroll={handleScroll}
            >
                {selfImprovementCardData.map((cardData, index) => (
                    <SelfImprovementCard
                        key={index}
                        heading={cardData.heading}
                        description={cardData.description}
                        active={activeIndex === index}
                    />
                ))}
            </div>
        </div>
    );
};

export default SelfImprovement;
