import React, { useEffect } from 'react';
import testFoto from '../assets/image.jpg';
import { MdArrowDownward } from 'react-icons/md';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import '../index.css';

const Hero: React.FC = () => {
    const handleScroll = (event: WheelEvent | null, direction?: number) => {
        if (event) {
            event.preventDefault();
        }
        const delta = direction !== undefined ? direction : Math.sign((event as WheelEvent)?.deltaY || 0);
        const currentSection = Math.round(window.scrollY / window.innerHeight);
        const nextSection = currentSection + delta;
        const nextSectionTop = nextSection * window.innerHeight;
        window.scrollTo({
            top: nextSectionTop,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleWheelScroll = (event: WheelEvent) => handleScroll(event);

        window.addEventListener('wheel', handleWheelScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheelScroll);
        };
    }, []);

    const handleArrowClick = () => {
        handleScroll(null, 1);
    };

    return (
        <div>
            <section className="max-w-screen w-screen h-screen max-h-screen bg-custom-bg-color-gray">
                <div className="container mx-auto h-full flex flex-col justify-between">
                    {/* topcontent */}
                    <div className='hidden lg:flex justify-between font-medium text-custom-header-text mt-8 lg:mx-4 xl:mx-4'>
                        <p>Graduated in "Web Development & Design"</p>
                        <p>Currently looking for a front-end job</p>
                        <p>Based in Lierde, Belgium</p>
                        <p className='font-bold'>Contact me </p>
                    </div>
                    <div className='lg:hidden mt-8 flex justify-center items-center h-16 mx-10'>
                        <Carousel
                            showThumbs={false}
                            showStatus={false}
                            showArrows={false}
                            showIndicators={false}
                            infiniteLoop
                            autoPlay
                            interval={3000}
                            stopOnHover={false}
                            swipeable
                            emulateTouch
                        >
                            <div>
                                <p className='text-center text-xl md:text-3xl'>Graduated in "Web Development & Design"</p>
                            </div>
                            <div>
                                <p className='text-center text-xl md:text-3xl'>Currently looking for a front-end job</p>
                            </div>
                            <div>
                                <p className='text-center text-xl md:text-3xl'>Based in Lierde, Belgium</p>
                            </div>

                        </Carousel>
                    </div>
                    {/* header and image */}
                    <div className='leading-none mt-20 mx-6 lg:mx-4 xl:mx-4 flex justify-between items-center lg:items-start'>
                        <div className='leading-none'>
                            <h1 className='font-semibold lg:text-custom-header-title-7rem xl:text-custom-header-title text-5xl md:text-7xl'>FREEK</h1>
                            <h1 className='font-semibold lg:text-custom-header-title-7rem  xl:text-custom-header-title text-5xl md:text-7xl'>HERREGODS</h1>
                            <div className='leading-none lg:hidden inline-block'>
                                <h1 className='font-semibold lg:text-custom-header-title md:text-3xl'>FRONT-END DEVELOPER</h1>
                            </div>
                        </div>

                        <div className="hidden md:block w-custom-header-image">
                            <img src={testFoto} alt="Freek Herregods" className="object-cover w-full lg:h-80 md:h-72" />
                        </div>
                    </div>

                    {/* bottom content */}
                    <div className='flex lg:flex-row flex-col-reverse justify-between lg:items-end items-center lg:mt-20 pb-12 xl:mx-4 mx-6'>
                        <MdArrowDownward className="xl:w-24 xl:h-36 md:w-16 md:h-24 w-14 h-16 text-custom-header-text mb-1 pulsate cursor-pointer" onClick={handleArrowClick} />
                        <p className='font-medium md:text-xl xl:text-2xl lg:max-w-60 xl:max-w-custom-width-25rem mb-5 xl:mb-7'>CRAFTING SEAMLESS, INTERACTIVE WEB EXPERIENCES WITH PRECISION AND STYLE</p>
                        <div className='leading-none lg:inline-block hidden'>
                            <h1 className='font-semibold xl:text-custom-header-title lg:text-custom-header-title-7rem '>FRONT-END</h1>
                            <h1 className='font-semibold xl:text-custom-header-title lg:text-custom-header-title-7rem '>DEVELOPER</h1>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>

    );
};

export default Hero;