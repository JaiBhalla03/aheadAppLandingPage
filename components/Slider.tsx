'use client';
import React, {useEffect, useRef, useState} from 'react';
import SliderCard from "@/components/SliderCard";
import {cardData} from "@/data";
import {motion} from "framer-motion";

const Slider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [carousel.current]);

    return (
        <motion.div ref={carousel} className={'cursor-grab overflow-hidden'}>
            <motion.div
                drag={"x"}
                dragConstraints={{right:0, left: -width}}
                whileTap={{cursor: 'grabbing'}}
                className={'flex'}
            >
                {cardData.map((card) => (
                    <div key={card.cardNo} className={'px-4 py-10 '}>
                        <SliderCard
                            heading={card.heading}
                            description={card.description}
                            backgroundColor={card.backgroundColor}
                            svg={card.svg}
                        />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Slider;