import React from 'react';

import '../index.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaArrowLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    value: '+32 468 24 29 69',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'freek.herregods@icloud.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    value: 'Lierde, Belgium',
  },
];


const Contact: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className='max-w-screen w-screen py-32 bg-custom-bg-color-section2 flex justify-center items-center'>
      <button
        className="absolute top-4 left-4 flex items-center bg-custom-bg-color-button-disabled hover:bg-custom-bg-color-button-active transition-all hover:shadow-md text-white px-4 py-2 rounded-md"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="mr-2 text-lg" />
        Back
      </button>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-7">
          {/* form */}
          <div className="order-2 xl:order-none">
            <form action="" className="flex flex-col gap-6 p-10 bg-custom-bg-color-button-disabled rounded-lg md:mx-0 mx-6">
              <h3 className="text-4xl text-white">Let's work together</h3>
              <p className="text-white/80">
                With a strong background in web development and design, I bring a unique blend of creativity and technical expertise to every project. My commitment to crafting seamless, interactive web experiences ensures that your vision is brought to life with precision and style. Let's collaborate to create something exceptional.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="webdes">Web Design</SelectItem>
                    <SelectItem value="joboffer">Job offer</SelectItem>
                    <SelectItem value="specific">Specific question</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea placeholder="Type your message here." className='h-48' />
              <Button className='bg-custom-bg-color-gray hover:bg-custom-bg-color-section2 transition-all hover:shadow-md text-black px-4 py-2 rounded-md w-fit text-md'>Send message</Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center justify-center md:justify-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='bg-custom-bg-color-button-disabled rounded-lg p-6 md:mx-0 mx-6 w-full md:w-fit'>
              {info.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white mb-4 last:mb-0 ">
                  <span className="text-2xl bg-custom-bg-color-button-active p-3 rounded-md shadow-md">{item.icon}</span>
                  <div>
                    <h4 className="text-sm text-white/80">{item.title}</h4>
                    <p className="text-lg">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;