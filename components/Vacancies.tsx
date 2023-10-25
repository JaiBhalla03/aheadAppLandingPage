'use client';
import React from 'react';
import VacancyCard from "@/components/VacancyCard";
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";

const Vacancies = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    const headingVariants = {
        hidden: {
            x: -200,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: 'spring',
                stiffness: 100
            }
        }
    }
    return (
        <div className={'px-4 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-2 md:gap-8 lg:gap-14'}>
            <motion.div
                className={'text-2xl md:text-4xl lg:text-6xl font-bold'}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={headingVariants}
            >Open vacancies</motion.div>
            <div className={'flex flex-col lg:flex-row w-full gap-8'}>
                <VacancyCard
                    heading={'Senior Full-Stack Engineer'}
                    position={'Full-time position'}
                    location={'Berlin or remote'}
                    salary={'€65-85k, 0.5-1.50% equity share options'}
                />
                <VacancyCard
                    heading={'Senior Designer'}
                    position={'Full-time position'}
                    location={'Berlin or remote'}
                    salary={'€40-55k, 0.25-0.50% equity share options'}
                />
                <VacancyCard
                    heading={'Superstar Intern'}
                    position={'Full-time position'}
                    location={'Berlin or remote'}
                    salary={'€20-24k, 0.5-1.50% equity shar options'}
                />
            </div>
        </div>
    );
};

export default Vacancies;