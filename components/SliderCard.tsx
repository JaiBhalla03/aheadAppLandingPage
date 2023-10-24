import React from 'react';

interface SliderCardProps{
    heading: string;
    description: string;
    backgroundColor: string;
    svg: React.ReactNode;
};

const SliderCard: React.FC<SliderCardProps> = ({heading, description, backgroundColor, svg}) => {
    console.log(backgroundColor);
    return (
        <div className={`hover:-rotate-[10deg] group bg-[${backgroundColor}] hover:bg-[#6341ef] hover:text-white w-96 h-64 rounded-2xl p-8 flex flex-col gap-4 transition-all duration-300`}>
            <div className={'py-4'}>
                <div className={'w-8 h-8'}>
                    {svg}
                </div>
            </div>
            <div className={'font-bold'}>{heading}</div>
            <div className={'text-sm group-hover:text-white text-gray-700'}>{description}</div>
        </div>
    );
};

export default SliderCard;