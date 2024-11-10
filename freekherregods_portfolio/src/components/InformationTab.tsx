import React from 'react';
import { Tabs, TabsContent, TabslList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';


import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiTailwindcss, SiGatsby } from 'react-icons/si';
import '../index.css';
import { TabsList } from '@radix-ui/react-tabs';

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
            description: 'Graduated in "Web Development & Design" at Howest Kortrijk',
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
            title: 'Internship Front-end Developer',
            description: 'Qite',
            duration: '2024',
        },
        {
            title: 'Internship Front-end Developer',
            description: 'Qite',
            duration: '2024',
        },
        {
            title: 'Internship Front-end Developer',
            description: 'Qite',
            duration: '2024',
        },
        {
            title: 'Internship Front-end Developer',
            description: 'Qite',
            duration: '2024',
        },
        {
            title: 'Internship Front-end Developer',
            description: 'Qite',
            duration: '2024',
        },
        {
            title: 'Internship Front-end Developer',
            description: 'Qite',
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
        <section className="w-screen h-screen text-white bg-custom-bg-color-section2 flex items-center justify-center">
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
                            <div className='flex flex-col gap-7 text-center xl:text-left'>
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className='max-w-xl text-white/60 mx-auto xl:mx-0'>
                                    {experience.description}
                                </p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.info.map((item, index) => (
                                            <li key={index} className='bg-black h-[120px] py-4 px-8 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span>{item.duration}</span>
                                                <span>{item.title}</span>

                                                <h3>{item.description}</h3>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">Education</TabsContent>
                        <TabsContent value="skills" className="w-full">Skills</TabsContent>
                        <TabsContent value="about-me" className="w-full">About me</TabsContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default InformationTab;