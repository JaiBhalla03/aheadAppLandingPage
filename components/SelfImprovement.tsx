import React from 'react';
import Image from 'next/image';
import selfBlueGhost from '@/public/images/heroBlueGhost.png'
import {cardData, selfImprovementCardData} from "@/data";
import SelfImprovementCard from "@/components/SelfImprovementCard";

const SelfImprovement = () => {
    return (
        <div className={'p-20'}>
            <div className={'flex flex-col'}>
                <div className={'text-xl font-medium'}>Wrong with self-improvement & how we're fixing it.</div>
                <div className={'flex gap-8'}>
                    <div className={'text-5xl font-bold flex items-center'}>Self-improvement. Ugh</div>
                    <div><Image src={selfBlueGhost} alt={''}/> </div>
                </div>
            </div>
            <div className={'px-40 py-10'}>
                <div className={'h-[30rem] overflow-y-scroll'}>
                    {
                        selfImprovementCardData.map((cardData)=>(
                            <SelfImprovementCard heading={cardData.heading} description={cardData.description}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SelfImprovement;