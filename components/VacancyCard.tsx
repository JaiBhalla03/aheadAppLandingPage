'use client';
import React, {useState} from 'react';
import {motion} from 'framer-motion';

interface VacancyCardProps{
    heading: string;
    position: string;
    location: string;
    salary: string;
};

const VacancyCard: React.FC<VacancyCardProps> = ({heading, position, location, salary}) => {
    const [isButtonVisible, setButtonVisible] = useState(false);
    return (
        <motion.div
            className={'rounded-[2rem] bg-[#fefbec] hover:bg-amber-100 transition-all duration-500 p-10 flex flex-col gap-3'}
            initial={{ height: 220 }}
            whileHover={{ height: 300 }}
            onHoverStart={() => setButtonVisible(true)}
            onHoverEnd={() => setButtonVisible(false)}
            transition={{ ease: "easeInOut", duration: 0.3 }}
        >
            <div className={'font-semibold text-xl'}>{heading}</div>
            <div>
                <ul className={'list-disc space-y-3'}>
                    <li>{position}</li>
                    <li>{location}</li>
                    <li>{salary}</li>
                </ul>
            </div>
            {isButtonVisible && (
                <div className={'flex justify-end'}>
                    <motion.button
                        initial="hidden"
                        whileInView="visible"
                        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.7 },
                        }}
                        className="w-32 cursor-pointer text-white bg-black rounded-full px-3 py-2 mt-4"
                    >
                        See Details
                    </motion.button>
                </div>
            )}
        </motion.div>
    );
};

export default VacancyCard;