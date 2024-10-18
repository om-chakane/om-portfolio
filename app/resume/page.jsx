"use client";

import { useState } from "react";
import { Description } from "@radix-ui/react-dialog";
import { Icon, Scroll } from "lucide-react";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaRobot, FaPython, FaBrain, FaLanguage} from "react-icons/fa";
import { TbScanEye } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { PiFileSql } from "react-icons/pi";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";
import { GiArchiveResearch } from "react-icons/gi";
import Image from 'next/image';

const about={
  title: 'About Me',
  description:
  "I am a graduate student at University of Southern California, pursuing Masters in Computer Science."+
  "My interest lies in the domain of Machine Learning, Computer Vision and HCI."+
  "I love when ML pokes into other businesses, which explains my previous research experience in the healthcare domain. I worked on identifying and verifying association between CVD and RFI Biomarkers." +
  "Besides, theoretical ML fascinated me during my Masters(actually the math did) and I was happily able to experiment with it in CSCI567 @USC."+
  "When not in front of my laptop, I love being close to nature, spend time hiking and in solace of my books (and pets)!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Om Madhukar Chakane"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1)323-620-6793"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Pronouns",
      fieldValue: "He/Him/His"
    },
    {
      fieldName: "Email",
      fieldValue: "omchakane222@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi, Spanish, Marathi"
    },
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      company: "Big Data Transport Center",
      position: "Research Assistant",
      duration: "April 2024 - Present",
      details: [
        "Research techniques to identify, verify associations and extract Cardiovascular Disease (CVD) biomarkers present in retinal vasculature from Retinal Fundus Images(RFI)",
        "Working on detailed analysis of RFMiD dataset - rare retinal diseases for higher accuracy predicting model built using 5-fold cross validation and Logistic Regression",
        "Leading the development of optimal model by modifying U-NET architecture for semantic segmentation of RFI and biomarker extraction from the same.",
      ]
    },
    {
      company: "Center of Excellence in HCI",
      position: "Research Intern",
      duration: "June 2022 - December 2022",
      details: [
        "Designed a PRISMA Workflow based on a holistically developed literature review of 56 ACI research papers",
        "Reviewed hitherto work in field of ACI and studied the Machine Learning methodologies deployed in each paper.",
        "Currently leading the publication and development of the final ACI review paper focussing on use of computer technology and its impact on animal welfare.",
        "Received a Travel Grant Award to present a research abstract on “Pet animal health monitoring using wearables” at ACM SIGCHI Workshop in Dhaka",
        "Managed liaison at the virtual CHIuXiD 2022 workshop involving 40 academicians from 9 Asian countries",
        "Addressed 15 other research interns on performing an effective literature review",
      ]
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      institution: "University of Southern California",
      degree: "MS in Computer Science",
      duration: "August 2023 - May 2025",
    },
    {
      institution: "Vishwakarma Institute of Technology",
      degree: "B.Tech in Computer Engineering",
      duration: "July 2019 - May 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam possimus non porro magni?",
  skillList : [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaBrain />,
      name: "Machine Learning",
    },
    {
      icon: <FaLanguage />,
      name: "Natural Language Processing",
    },
    {
      icon: <TbScanEye />,
      name: "Computer Vision",
    },
    {
      icon: <PiFileSql />,
      name: "SQL",
    },
    {
      icon: <FaRobot />,
      name: "Robotics",
    },
    {
      icon: <VscGraph />,
      name: "Statistics",
    },
    {
      icon: <GiArchiveResearch />,
      name: "Research",
    },
  ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import {ScrollArea} from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const Resume = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
        defaultValue="about"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{experience.title}</h3>
    {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {experience.description}
    </p> */}
    <ScrollArea className="h-[400px] overflow-auto">
      <div className="flex flex-col gap-[30px]">
        {experience.items.map((item, index) => (
          <div
            key={index}
            className={`bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 cursor-pointer transition-transform duration-300 ${expandedIndex === index ? 'scale-105' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <span className="text-accent">{item.duration}</span>
            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
              {item.position}
            </h3>
            <div className="flex items-center gap-3">
              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
              <p className="text-white/60">{item.company}</p>
            </div>
            {/* Conditionally render the details */}
            {expandedIndex === index && (
              <div className="font-sans mt-4 text-sm">
                <ul className="font-sans list-disc list-inside ml-5 text-sm">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs mb-4">{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
</TabsContent>

<TabsContent value="education" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
      {education.description}
    </p> */}
    <ScrollArea className="h-[400px] overflow-auto">
      <div className="flex flex-col gap-[30px]">
        {education.items.map((item, index) => (
          <div
            key={index}
            className="education-item cursor-pointer transition-transform duration-300"
            onClick={() => handleCardClick(index)}
          >
            <div className="education-details">
              <span className="dates text-accent">{item.duration}</span>
              <h3 className="degree">{item.degree}</h3>
              <div className="flex items-center gap-3">
                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </div>
            <div className="logo">
              {item.institution === "University of Southern California" && (
                <Image src="/assets/uscLogo.png" alt="USC Logo" />
              )}
              {item.institution === "Vishwakarma Institute of Technology" && (
                <Image src="/assets/vitLogo.png" alt="VIT Logo" />
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
</TabsContent>





            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> */}
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                    <li key={index}>
                      <TooltipProvider delayDuration={20}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>


            <TabsContent value="about" className="w-full text-center xl:text-left">
  <div className="flex flex-col gap-[30px] px-4 xl:px-0">
    {/* Title Section */}
    <motion.h3
      className="text-4xl font-bold mb-6 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {about.title}
      <div className="absolute inset-x-0 bottom-[-10px] mx-auto w-24 border-b-2 border-accent"></div>
    </motion.h3>

    {/* Info Section */}
    <div className="bg-[#2a2a2a] py-6 px-4 rounded-lg shadow-lg">
      <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
        {about.info.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-center justify-center xl:justify-start gap-4 border-b border-gray-700 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <span className="text-white/60 font-semibold">{item.fieldName}:</span>
            <span className="text-base text-white">{item.fieldValue}</span>
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Description Section */}
    <motion.p
      className="max-w-[600px] mx-auto xl:mx-0 text-white/80 leading-relaxed mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {about.description}
    </motion.p>

    {/* Optional: Add a profile image */}
    {/* <div className="flex justify-center xl:justify-start mt-6">
      <img src="/path/to/profile.jpg" alt="Profile" className="rounded-full w-32 h-32 object-cover transition-transform duration-500 hover:scale-105" />
    </div> */}
  </div>
</TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;