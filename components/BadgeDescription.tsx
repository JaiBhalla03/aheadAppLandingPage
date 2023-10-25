import React from 'react';
import Image from 'next/image';
import {StaticImageData} from "next/image";
import {useInView} from "react-intersection-observer";
import {motion} from 'framer-motion';

interface BadgeDescriptionProps{
    badge: StaticImageData;
    heading: string;
};

const BadgeDescription:React.FC<BadgeDescriptionProps> = ({badge, heading}) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    const badgeVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1,
            transition:{
                type: 'spring',
                stiffness: 200,
                duration: 0.5
            }
        },
    };
    const badgeHeadingVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1,
            transition:{
                type: 'spring',
                delay: 0.3,
                stiffness: 200,
                duration: 0.5
            }
        },
    };
    return (
        <div className={'flex flex-col items-center gap-2 sm:gap-4 w-72 h-20'}>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={badgeVariants}
            >
                <Image src={badge} alt={''}/>
            </motion.div>
            <motion.div
                className={'text-sm text-center font-semibold'}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={badgeHeadingVariants}
            >{heading}</motion.div>
        </div>
    );
};

export default BadgeDescription;