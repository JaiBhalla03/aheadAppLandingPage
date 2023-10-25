import React from 'react';

interface WorkWithCardProps{
    heading: string;
    description: string;
};

const WorkWithCard: React.FC<WorkWithCardProps> = ({heading, description}) => {
    return (
        <div className={'bg-white w-full lg:w-96 rounded-[2rem] p-10 flex flex-col gap-4'}>
            <div className={'font-semibold text-lg'}>{heading}</div>
            <div className={'font-medium text-sm text-gray-600 leading-relaxed'}>{description}</div>
        </div>
    );
};

export default WorkWithCard;