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
  " My interest lies in the domain of Machine Learning, Computer Vision and HCI."+
  " I love when ML pokes into other businesses, which explains my previous research experience in the healthcare domain. I worked on identifying and verifying association between CVD and RFI Biomarkers." +
  " Besides, theoretical ML fascinated me during my Masters (actually the math did) and I was happily able to experiment with it in CSCI567 @USC."+
  " When not in front of my laptop, I love being close to nature, spend time hiking and in solace of my books (and pets)!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Om Madhukar Chakane"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 323-620-6793"
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

const certificates = {
  title: "Certificates",
  items: [
    {
      name: "Japan Tech Student Exchange Program",
      source: "Kanagawa Institute of Technology",
      date: "2022",
      link: "https://drive.google.com/file/d/1OdczLkp1ye3ARvPnc0pyHNTFIa3-BjjW/view?usp=sharing",
      thumbnail: "/om-portfolio/assets/japan.png"
    },
    {
      name: "Artificial Intelligence and Data Analytics",
      source: "Extra Credit Program @VIT Pune",
      date: "2019 - 2021",
      link: "https://drive.google.com/file/d/1itBUvZruYaTp3vPcnR7Guml8sPfYWcJA/view?usp=sharing",
      thumbnail: "/om-portfolio/assets/AIDA.png"
    },
   
    // Add more certificates as needed
  ]
};

// Add the workshops section
const workshops = {
  title: "Workshops & Conferences",
  // description: "A list of workshops and conferences I have participated in and contributed to.",
  items: [
    {
      name: "CHIuXiD Workshop",
      date: "Nov. 2022",
      location: "Bali, Indonesia",
      link: "https://drive.google.com/file/d/1ReBQhlmDeIJnA5Klpo14iaWbwCkgb2i2/view?usp=sharing",
      description: "Hosted the workshop involving 40 academicians from 9 Asian countries.",
    },
    {
      name: "ACM SIGCHI Workshop",
      date: "Jun. 2022",
      location: "Dhaka, Bangladesh",
      link: "https://sites.google.com/view/sigchi-workshop-bd-22/participants-and-travel-grant?authuser=0",
      description: "Participant and Travel Grant Award Recipient (USD 250)",
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

const extracurriculars = {
  title: "Extracurriculars",
  items: [
    {
      role: "Treasurer - HSO",
      place: "University of Southern California, LA",
      tenure: "Jan. 2024 - Present",
      description: "Managing Finance of the org. along with arrangement of 10+ events celebrating diverse Hindu festivals"
    },
    {
      role: "Volunteer",
      place: "Stray Cat Alliance, LA",
      tenure: "Oct. 2023 - Present",
      description: "Morning shift: Cleaning 20 kennels, Feeding 60 cats in a shift."
    },
    {
      role: "Club Head - Ekasutram",
      place: "VIT Pune, India",
      tenure: "Aug. 2021 - Aug. 2022",
      description: "Worked with 8 other members and guided 18 other core team members. Organized around 20+ mathematics-based activities till date."
    },
    {
      role: "Coordinator - Rescue VITSocials",
      place: "VIT Pune, India",
      tenure: "Aug. 2020 - Aug. 2021",
      description: "Animal Rescue team in VIT, Pune working all over Pune. Rescued and treated around 12 animals."
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
            <TabsTrigger value="extracurriculars">Extracurriculars</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="workshops">Workshops & Conferences</TabsTrigger>;
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
                <Image src="/om-portfolio/assets/uscLogo.png" alt="USC Logo" width={100} height={50}/>
              )}
              {item.institution === "Vishwakarma Institute of Technology" && (
                <Image src="/om-portfolio/assets/vitLogo.png" alt="VIT Logo" width={100} height={50}/>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  </div>
</TabsContent>

<TabsContent value="extracurriculars" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{extracurriculars.title}</h3>
    <div className="flex flex-col gap-[30px]">
      {extracurriculars.items.map((item, index) => (
        <div
          key={index}
          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 cursor-pointer transition-transform duration-300"
        >
          <h3 className="text-xl max-w-[260px] min-h-[60px] whitespace-normal leading-tight text-ellipsis overflow-hidden text-center lg:text-left font-semibold text-accent">
            {item.role}
          </h3>
          <p className="text-[#8FA0AB] text-sm italic">
            {item.place} | {item.tenure}
          </p>
          <p className="text-white/80 text-sm mt-2 leading-relaxed lg:text-left">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</TabsContent>




<TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> */}
    </div>
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {skills.skillList.map((skill, index) => (
        <li key={index} className="flex flex-col items-center">
          <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
            <div className="text-6xl">{skill.icon}</div>
          </div>
          <p className="mt-2 text-center capitalize">{skill.name}</p> {/* Display skill name directly */}
        </li>
      ))}
    </ul>
  </div>
</TabsContent>

<TabsContent value="certificates" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{certificates.title}</h3>
    <ScrollArea className="h-[400px] overflow-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#232329] rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Image
              src={item.thumbnail}
              alt={item.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
              <p className="text-sm text-white/60 mb-2">{item.source}</p>
              <p className="text-sm text-accent mb-4">{item.date}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </ScrollArea>
  </div>
</TabsContent>

<TabsContent value="workshops" className="w-full">
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{workshops.title}</h3>
    <p className="text-white/60 mb-6">{workshops.description}</p>

    <div className="flex flex-col gap-[30px]">
      {workshops.items.map((item, index) => (
        <div
          key={index}
          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 cursor-pointer transition-transform duration-300"
        >
          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold text-accent">
            {item.name}
          </h3>
          <p className="text-sm text-[#8FA0AB] italic">
            {item.date} | {item.location}
          </p>
          <p className="text-white/80 text-sm mt-2 leading-relaxed lg:text-left">
            {item.description}
          </p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors mt-2"
          >
            View Details
          </a>
        </div>
      ))}
    </div>
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
      className="max-w-[600px] mx-auto text-justify text-white/80 leading-relaxed mt-6"
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
