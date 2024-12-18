import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import Resume from '../assets/FreekHerregodsCV_2024.pdf';

import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiTailwindcss, SiGatsby, SiJavascript } from 'react-icons/si';
import '../index.css';


//about data
const about = {
    title: 'About Me',
    description: 'I am a front-end developer based in Lierde, Belgium. I graduated in "Web Development & Design" and I am currently looking for a front-end job.',
    info: [
        {
            title: 'Name',
            description: 'Freek Herregods',
        },
        {
            title: 'Location',
            description: 'Lierde, Belgium',
        },
        {
            title: 'Education',
            description: 'Web Development & Design',
        },
        {
            title: 'Phone',
            description: '+32 468 24 29 69',
        },
        {
            title: 'Email',
            description: 'freek.herregods@icloud.com',
        },
        {
            title: 'Freelance',
            description: 'Available',
        },
        {
            title: 'Languages',
            description: 'Dutch, English',
        },
        {
            title: 'Hobbies',
            description: 'Competitive powerlifting',
        },
    ],
}

//experience data
const experience = {
    title: 'My experience',
    description: 'I have a passion for web development and design. I am a front-end developer with experience in HTML, CSS, JavaScript, React, and more.',
    info: [
        {
            title: 'Front-end Developer',
            description: 'Currently looking for a front-end job',
            duration: '2024 - Present',
        },
        {
            title: 'Freelance Front-end Developer',
            description: 'Website for HB Photography',
            duration: '2024',
        },
        {
            title: 'Internship Front-end Developer',
            description: 'Qite',
            duration: '2024',
        },

    ],
}

//skills data
const skills = {

    title: 'Skills',
    description: 'I have experience in HTML, CSS, JavaScript, React, Vue, Angular, and more.',
    skillList: [
        {
            title: 'HTML',
            icon: <FaHtml5 />,
        },
        {
            title: 'CSS',
            icon: <FaCss3Alt />,
        },
        {
            title: 'React',
            icon: <FaReact />,
        },
        {
            title: 'Vue',
            icon: <FaVuejs />,
        },
        {
            title: 'Angular',
            icon: <FaAngular />,
        },
        {
            title: 'Tailwind CSS',
            icon: <SiTailwindcss />,
        },
        {
            title: 'Gatsby',
            icon: <SiGatsby />,
        },
        {
            title: 'JavaScript',
            icon: <SiJavascript />,
        },

    ],
};

//education data
const education = {
    title: 'Education',
    description: 'I studied "Multimedia & Creative Technology" for 2 years but I graduated in "Web Development & Design" at Howest Kortrijk. I have experience in HTML, CSS, JavaScript, React, Vue, Angular and more.',
    info: [
        {
            title: 'Web Development & Design',
            school: 'Howest Kortrijk',
            duration: '2022-2024',
        },
        {
            title: 'Multimedia & Creative Technology',
            school: 'Howest Kortrijk',
            duration: '2020-2022',
        },
        {
            title: 'Industrial ICT',
            school: 'GO! Atheneum Geraardsbergen',
            duration: 'High school',
        },
    ],
}

const InformationTab: React.FC = () => {
    return (
        <section className="w-screen xl:h-screen xl:py-0 py-12 bg-custom-bg-color-section2 flex items-center justify-center">
            <div className="container mx-auto w-[80vw]">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-16'>
                    <TabsList className='flex flex-col w-full max-w-96 mx-auto xl:mx-0 gap-5'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about-me">About me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-7 text-center text-black xl:text-left'>
                                <h3 className="text-2xl md:text-4xl font-bold">{experience.title}</h3>
                                <p className='max-w-xl md:text-lg mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.info.map((item, index) => (
                                            <li key={index} className='bg-custom-bg-color-button-disabled h-[140px] py-4 px-8 rounded-md flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-cyan-300'>{item.duration}</span>
                                                <h3 className='text-lg text-center lg:text-left text-white'>{item.title}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className='w-[6px] h-[6px] rounded-full bg-cyan-300'></span>
                                                    <p className='text-white/80'>{item.description}</p>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-7 text-center text-black xl:text-left'>
                                <h3 className="text-2xl md:text-4xl font-bold">{education.title}</h3>
                                <p className='max-w-xl md:text-lg mx-auto xl:mx-0'>
                                    {education.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.info.map((item, index) => (
                                            <li key={index} className='bg-custom-bg-color-button-disabled h-[140px] py-4 px-8 rounded-md flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-cyan-300'>{item.duration}</span>
                                                <h3 className='text-lg text-center lg:text-left text-white'>{item.title}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className='w-[6px] h-[6px] rounded-full bg-cyan-300'></span>
                                                    <p className='text-white/80'>{item.school}</p>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className='flex flex-col gap-7 text-center text-black xl:text-left'>
                                <h3 className="text-2xl md:text-4xl font-bold">{skills.title}</h3>
                                <p className='max-w-xl md:text-lg mx-auto xl:mx-0'>
                                    {skills.description}
                                </p>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 mt-4'>
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-40 rounded-md flex justify-center items-center bg-custom-bg-color-button-disabled'>
                                                        <div className='text-7xl text-white group-hover:text-cyan-300 transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p>{skill.title}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about-me" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-7'>
                                <h3 className="text-2xl md:text-4xl font-bold">{about.title}</h3>
                                <p className='max-w-xl md:text-lg mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-5  mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li className='flex items-center justify-start gap-4' key={index}>
                                            <span className='text-black/80 text-sm'>{item.title}</span>
                                            <span className='text-lg'>{item.description}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex xl:justify-start justify-center gap-7'>

                                    <a href={Resume} download className="bg-custom-bg-color-button-disabled hover:bg-custom-bg-color-button-active transition-all hover:shadow-md text-white px-4 py-2 rounded-md w-fit">Download Resume</a>
                                </div>

                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default InformationTab;