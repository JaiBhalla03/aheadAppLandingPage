import React from 'react';

interface SubFeatureProps{
    sectionOne: string;
    sectionTwo: string;
}

const SubFeature: React.FC<SubFeatureProps> = ({sectionOne, sectionTwo}) => {
    return (
        <div className={'flex flex-col md:flex-row gap-4 lg:gap-8 px-4 py-10 md:p-14 lg:p-20 w-full'}>
            <div className={'w-full md:w-1/3 text-3xl lg:text-4xl text-black font-bold'}>EQ beats IQ</div>
            <div className={'lg:px-4 text-lg lg:text-xl lg:leading-loose font-medium text-gray-700 w-full md:w-1/3'}>
                {sectionOne}
            </div>
            <div className={'lg:px-4 text-lg lg:text-xl lg:leading-loose font-medium text-gray-700 w-full md:w-1/3'}>
                {sectionTwo}
            </div>
        </div>
    );
};

export default SubFeature;