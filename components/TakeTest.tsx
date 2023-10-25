'use client';
import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from "react-intersection-observer";

const TakeTest = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });
    const headingVariants = {
        hidden: {
            y: 20,
            scale: 0.7
        },
        visible: {
            y: 0,
            scale: 1,
            transition: {duration: 0.7}
        }
    }
    const buttonVariants = {
        hidden: {
            y: -20,
            scale: 0.8
        },
        visible: {
            y: 0,
            scale: 1,
            transition: {delay: 0.2, duration: 0.5}
        }
    }
    const pathVariants1 = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 1, // Adjust the duration as needed
                ease: 'easeInOut', // Choose an easing function
            },
        },
    };
    const pathVariants2 = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                delay: 0.3,
                duration: 1, // Adjust the duration as needed
                ease: 'easeInOut', // Choose an easing function
            },
        },
    };
    const pathVariants3 = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                delay: 1,
                duration: 1, // Adjust the duration as needed
                ease: 'easeInOut', // Choose an easing function
            },
        },
    };
    return (
        <div id={'test'} className={'h-screen flex flex-col gap-2 gap-4 justify-center items-center'}>
            <motion.div
                className={'font-semibold text-md md:text-lg text-gray-800'}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={headingVariants}
            >We take privacy seriously</motion.div>
            <motion.div
                className={'font-bold text-2xl md:text-3xl'}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={headingVariants}
            >Before you get started</motion.div>
            <div className={'text-center text-md md:text-xl text-gray-600'}>"We won't share your answers with anyone (and won't ever tell <br/> you which friends said what about you)"</div>
            <div className={'flex items-center gap-4 py-4'}>
                <div className={'font-semibold text-md md:text-lg text-gray-800'}>
                    with love,
                </div>
                <div>
                    <motion.svg
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        width="130" height="31" viewBox="0 0 130 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            variants={pathVariants1}
                            d="M1 1C6.08041 1 11.1608 1 16.2412 1C21.0871 1 26.1097 3 31 3" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <motion.path
                            variants={pathVariants2}
                            d="M17.6738 7C16.4481 8.73444 17.2693 13.7132 17.2693 15.904C17.2693 17.4388 17.2693 18.9737 17.2693 20.5086C17.2693 22.2535 16.6614 24.4009 18.6401 24.4009C19.964 24.4009 23.7809 23.1474 24.5727 21.6534C25.0816 20.6933 26.5591 20.013 27.2019 19.3892C28.0925 18.5251 28.1926 16.6163 26.7525 16.6163C23.5457 16.6163 22.9322 19.449 22.9322 22.5692C22.9322 23.2339 22.6033 27.0995 23.3367 27.1484C24.8391 27.2484 26.3714 27.1484 27.8761 27.1484C32.2097 27.1484 35.9312 26.7909 38.6627 22.4166C39.218 21.5273 40.3756 18.6258 38.8425 18.0918C38.0455 17.8142 35.2853 17.5708 34.7526 18.4479C33.8983 19.8547 32.175 20.3141 31.8537 22.3148C31.6249 23.7395 31.8312 25.4432 31.8312 26.894C31.8312 28.2777 33.3109 28.7716 34.2807 28.9546C35.9035 29.2608 37.1094 27.9558 38.3032 26.894C38.5514 26.6732 40.9839 22.3664 41.1122 22.8745C41.3328 23.7487 40.5818 26.6905 41.7639 26.6905C43.5443 26.6905 44.6168 27.0296 45.5841 25.1132C46.0102 24.269 45.9886 21.009 45.9886 23.485C45.9886 24.4228 45.5443 27.6536 46.1684 28.3186C47.1153 29.3275 49.2668 26.6472 49.5392 25.8764C49.9073 24.8347 51.2959 24.2264 51.9662 23.3833C52.8372 22.2877 52.8651 21.7741 52.8651 23.8412C52.8651 25.9329 54.066 25.3167 55.6966 25.3167C56.9137 25.3167 57.3243 24.5048 58.3033 24.4009C59.1703 24.3089 59.3181 23.4299 60.146 23.485C60.7679 23.5265 60.4271 24.4406 60.955 24.757C61.8985 25.3225 63.8931 24.8588 65 24.8588" stroke="black" stroke-width="2" stroke-linecap="round"/>
                        <motion.path
                            variants={pathVariants3}
                            d="M84.6311 20.2933C84.6311 18.585 84.902 18.0851 83.2253 18.0851C82.1915 18.0851 81.1577 18.0851 80.1238 18.0851C77.2999 18.0851 77 20.1414 77 22.7223C77 25.244 78.8703 25.8572 81.1949 25.1268C81.8705 24.9146 82.6425 23.397 83.1584 22.9431C84.1391 22.0804 84.2294 19.7171 84.2294 22.4034C84.2294 23.7046 83.8517 24.7097 85.2335 24.7097C86.3715 24.7097 87.5094 24.7097 88.6474 24.7097C89.5229 24.7097 91.4313 25.1326 92.0613 24.4398C93.0555 23.3466 93.6675 21.795 95.0736 21.1766C96.5816 20.5133 95.8768 15.8247 95.8768 14.3311C95.8768 13.3903 95.552 12.1723 95.4752 11.1169C95.4223 10.3903 92.7458 10.2415 92.2621 10.7734C91.1046 12.0462 91.8605 16.9295 91.8605 18.6248C91.8605 21.0294 91.8605 23.4339 91.8605 25.8384C91.8605 26.2348 92.0085 29.2914 92.1729 28.9299C93.1214 26.8438 92.7399 24.0703 93.8687 22.0844C94.6434 20.7214 96.7656 18.3409 98.2866 18.5267C100.438 18.7895 95.9847 30.3202 102.08 29.1016C102.821 28.9535 103.476 26.3931 103.999 25.6912C104.696 24.7534 104.764 23.683 105.494 22.7469C106.076 22.0003 106.372 21.2794 106.319 20.2933C106.289 19.7181 103.974 19.5353 103.597 19.9498C103.362 20.2085 102.705 23.038 102.705 23.3848C102.705 24.9617 102.944 25.3561 103.597 26.7217C104.874 29.3902 107.318 28.1339 109.309 27.1388C110.754 26.4165 111.541 23.6258 111.541 22.1335C111.541 20.8004 111.492 24.8008 111.541 26.1328C111.596 27.6619 113.752 26.8903 114.352 26.2309C115.723 24.7232 117.384 24.2004 117.565 21.7164C117.708 19.7526 119.011 16.6441 116.784 15.8278C116.224 15.6225 116.391 14.9936 115.713 14.9936C114.828 14.9936 113.943 14.9936 113.058 14.9936C111.725 14.9936 110.737 15.2292 110.737 16.7847C110.737 17.3645 110.391 20.3311 110.916 20.6368C111.68 21.0817 113.465 20.7923 114.352 20.7349C115.555 20.6571 116.858 18.5788 117.587 17.6434C118.505 16.4666 120.697 16.255 120.778 14.5519C120.913 11.7443 121.581 9.2466 121.581 6.3815C121.581 5.16289 121.581 3.94428 121.581 2.72567C121.581 0.408927 121.983 4.31956 121.983 5.0075C121.983 9.291 124.548 10.8924 125.687 14.6501C126.366 16.8909 127.845 18.2589 127.985 20.7349C128.091 22.593 128.265 24.3762 128.722 26.1328C129.703 29.909 127.989 30.5995 125.174 29.5678C122.626 28.6338 121.647 28.1438 120.867 25.2495C120.453 23.7105 120.774 21.9151 121.18 20.465C121.51 19.2856 121.585 17.8312 122.072 16.7601C122.633 15.5262 124.668 17.0393 125.196 15.8768" stroke="black" stroke-width="2" stroke-linecap="round"/>
                    </motion.svg>
                </div>
            </div>
            <motion.button
                className={'px-3 py-1 md:px-6 md:py-3 rounded-full bg-black text-gray-200 text-sm font-semibold'}
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={buttonVariants}
            >
                Start a test
            </motion.button>
            <div className={'text-sm text-gray-400 font-semibold'}>
                Take only 5 minutes
            </div>
        </div>
    );
};

export default TakeTest;