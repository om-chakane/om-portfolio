"use client";

import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify"; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 323 620 6793",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "omchakane222@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Los Angeles, California, USA",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/send-email', formData); // Adjust URL as necessary
      if (response.status === 200) {
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' }); // Reset form
        toast.success('Your message was sent successfully! Thank you for reaching out.'); // Show success toast
      }
    } catch (error) {
      setStatusMessage(`Error: ${error.response ? error.response.data : error.message}`);
      toast.error(`Error: ${error.response ? error.response.data : error.message}`); // Show error toast
    }
  };
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Your Owl Awaits!</h3>
              <p className="text-white/60">Drop me a message, and let’s make some magic together!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" />
                <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end xl:order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Add the ToastContainer to display notifications */}
      <ToastContainer />
    </motion.section>
  );
};

export default Contact;