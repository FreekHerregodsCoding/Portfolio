import React, { useState } from 'react';

import '../index.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import emailjs from 'emailjs-com';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaArrowLeft, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa';

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

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';;
const userId = import.meta.env.VITE_EMAILJS_USER_ID || '';;


const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    service: false,
    message: false,
  });

  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
    setErrors({ ...errors, service: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      firstname: formData.firstname === '',
      lastname: formData.lastname === '',
      email: !/\S+@\S+\.\S+/.test(formData.email),
      phone: formData.phone === '',
      service: formData.service === '',
      message: formData.message === '',
    };
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => !error);
    if (isValid) {
      const currentTime = Date.now();
      if (lastSubmissionTime && currentTime - lastSubmissionTime < 60000) { // 1 minute rate limit
        alert('Please wait a minute before submitting again.');
        return;
      }

      setLastSubmissionTime(currentTime);

      // Send email using EmailJS
      emailjs.send(
        serviceId!,
        templateId!,
        formData,
        userId!
      )
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setIsSubmitted(true); // Show success message
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
    }
  };

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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-custom-bg-color-button-disabled rounded-lg md:mx-0 mx-6 shadow-sm">
              <h3 className="text-4xl text-white">Let's work together</h3>
              <p className="text-white/80">
                With a strong background in web development and design, I bring a unique blend of creativity and technical expertise to every project. My commitment to crafting seamless, interactive web experiences ensures that your vision is brought to life with precision and style. Let's collaborate to create something exceptional.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="relative w-full flex">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="Firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className={`w-full ${errors.firstname ? 'border-red-500' : ''}`}
                  />
                  {errors.firstname && <FaTimesCircle className="absolute right-4 top-4 text-red-500" />}
                </div>
                <div className="relative w-full">
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className={`w-full ${errors.lastname ? 'border-red-500' : ''}`}
                  />
                  {errors.lastname && <FaTimesCircle className="absolute right-4 top-4 text-red-500" />}
                </div>
                <div className="relative w-full">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <FaTimesCircle className="absolute right-4 top-4 text-red-500" />}
                </div>
                <div className="relative w-full">
                  <Input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                  />
                  {errors.phone && <FaTimesCircle className="absolute right-4 top-4 text-red-500" />}
                </div>
              </div>
              <div className="relative w-full">
                <Select name="service" onValueChange={handleSelectChange}>
                  <SelectTrigger className={`w-full ${errors.service ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="WebDevelopment">Web Development</SelectItem>
                      <SelectItem value="WebDesign">Web Design</SelectItem>
                      <SelectItem value="JobOffer">Job offer</SelectItem>
                      <SelectItem value="SpecificQuestion">Specific question</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.service && <FaTimesCircle className="absolute right-10 top-4 text-red-500" />}
              </div>
              <div className="relative w-full">
                <Textarea
                  name="message"
                  placeholder="Type your message here."
                  value={formData.message}
                  onChange={handleChange}
                  className={`h-48 w-full ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <FaTimesCircle className="absolute right-4 top-4 text-red-500" />}
              </div>
              <Button type="submit" className='bg-custom-bg-color-gray hover:bg-custom-bg-color-section2 transition-all hover:shadow-md text-black px-4 py-2 rounded-md w-fit text-md'>Send message</Button>
              {isSubmitted && <p className="text-green-500 mt-4">Your message has been sent successfully!</p>}
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center justify-center md:justify-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className='bg-custom-bg-color-button-disabled rounded-lg p-6 md:mx-0 mx-6 w-full md:w-fit shadow-sm'>
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