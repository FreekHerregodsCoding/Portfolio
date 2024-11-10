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
            title: 'Internship',
            description: 'Front-end Developer at Qite',
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
        <section className="w-full h-screen max-h-screen bg-custom-bg-color-section2">
                <div className="container mx-auto h-full flex items-center justify-center text-white">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-16'>
                    <TabsList className='flex flex-col w-full max-w-96 mx-auto xl-mx-0 gap-5'>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about-me">About me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value="experience" className="w-full">Experience</TabsContent>
                    </div>
                </Tabs>

                
            </div>
        </section>
    );
};

export default InformationTab;