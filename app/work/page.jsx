"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: "Wavy: Generating Image from Speech",
    title: "project 1",
    description:
    "Generative AI approach to introduce a model to create images based on audio signals, enabling users to express artistic ideas directly through spoken language and expand the scope of image generation through multimodal approaches.",
    stack: [{name:"Python"}, {name:"CLIP Model"}, {name: "HuBERT"}],
    image: '/om-portfolio/assets/work/thumb1.jpg',
    live: "",
    github: "https://github.com/Vishesh-Mittal/Wavy",
  },
  {
    num: '02',
    category: "CaptionIt",
    title: "project 2",
    description:
    "Web application for generating automatic caption for any type of image.  Users can upload images, and the app instantly provides captions describing the content, making it useful for accessibility and content generation.",
    stack: [{name:"Python"}, {name:"Tensorflow"}, {name: "Keras"}],
    image: '/om-portfolio/assets/work/thumb2.png',
    live: "",
    github: "https://github.com/arshadpatel2001/CaptionIt",
  },
  {
    num: '03',
    category: "Subjective Answer Evaluator",
    title: "project 3",
    description:
    "Heavily influenced by the infamous Covid Era, this project aims at converting snaps of answer sheet to text using OCR and evaluate the answer based on professor's model answer.",
    stack: [{name:"Python"}, {name:"LSTM"}, {name:"OCR"}],
    image: '/om-portfolio/assets/work/thumb3.png',
    live: "",
    github: "https://github.com/arshadpatel2001/Subjective-Answer-Evaluator",
  },
  {
    num: '04',
    category: "Persona Leakage in GPT",
    title: "project 4",
    description:
    "Analysis based project aimed at investigating how language models like GPT can unintentionally reveal sensitive or private information about users or system personas during interactions.",
    stack: [{name:"Python"}, {name:"Neural Networks"}],
    image: '/om-portfolio/assets/work/thumb3.png',
    live: "",
    github: "",
  },
];

const Work = () => { 
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
    initial={{opacity:0}}
    animate={{
      opacity:1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* <Link href={project.live}>
                <TooltipProvider delayDuration={100}> 
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 
                    flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                </Link> */}
                {/* {project.github && (
  <Link href={project.github}>
    <TooltipProvider delayDuration={100}> 
      <Tooltip>
        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 
        flex justify-center items-center group">
          <BsGithub className="text-white text-3xl group-hover:text-accent"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Github repository</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Link>
)} */}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12"
            onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
<SwiperSlide key={index} className="w-full">
  {project.github ? (
    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
        {/* Gradient overlay effect on hover */}
        <div className="absolute top-0 bottom-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>

        {/* Image zoom-in effect on hover */}
        <div className="relative w-full h-full overflow-hidden">
          <Image 
            src={project.image} 
            fill 
            className="object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" 
            alt="" 
          />
        </div>

        {/* Stylish hover text with effects */}
        <div className="absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-100">
          <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg text-center">
            <p className="text-lg font-bold text-white">
              Take me to the Github Repo
            </p>
            {/* <span className="text-xl text-white transform transition-transform duration-300 group-hover:translate-x-1">
              ➡️
            </span> */}
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20">
      <div className="relative w-full h-full overflow-hidden">
        <Image 
          src={project.image} 
          fill 
          className="object-cover" 
          alt="" 
        />
      </div>
      {/* Optional message when no GitHub link is available
      <p className="absolute z-20 text-gray-500 text-lg font-semibold">
        No GitHub repo available
      </p> */}
    </div>
  )}
</SwiperSlide>

                );
              })}
              <WorkSliderBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] 
              w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
      </motion.section>
  );
};

export default Work;
