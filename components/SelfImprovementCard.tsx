import React from 'react';


interface SelfImprovementCard{
    heading: string;
    description: string;
}

const SelfImprovementCard: React.FC<SelfImprovementCard> = ({heading, description}) => {
    return (
        <div className={'w-full h-36 flex gap-4'}>
            <div className={'pt-2'}>
                <div className={'h-4 w-4 bg-[#6341ef] rounded-full'}>
                </div>
            </div>
            <div className={'flex flex-col gap-4'}>
                <div className={'font-semibold text-2xl'}>
                    {heading}
                </div>
                <div className={'font-normal text-xl'}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default SelfImprovementCard;