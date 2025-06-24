"use client"

import Image from "next/image"
import { motion } from "framer-motion";

export default function Home () {
  return(
    <main>
      <LandingSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}

const getMonthsOfExperience = () => {
  const startDate = new Date("2024-05-31"); // Your starting date here
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  return years * 12 + months;
};

const monthsOfExperience = getMonthsOfExperience();

function LandingSection (){
  return (
  <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden items-center justify-center text-center px-6 text-white">
  <Image 
    src="/byteprowler.jpg"
    alt="hero"
    loading="lazy"
    fill
    priority
    style={{ objectPosition: "center", objectFit: "cover"}}
  />
  <div className="z-10">
    <h1 className="text-4xl md:text-6xl font-bold">Ogo Joshua</h1>
    <p className="text-lg md:text-2xl mt-4">Fullstack Developer</p>
  </div>
  <div className="absolute inset-0 bg-black/40 z-0" />
</section>

  )
}

function AboutSection () {
  return(
    <motion.section id="about" className="py-16 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}>
    <motion.div  
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: false }}
      className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">
        About Me
      </h2>
      <p className="mb-4 mx-auto text-center">Hello! I&apos;m Ogo Joshua, a solo passionate freelance developer dedicated to creatin innovative solutions. I&apos;m focused on delivering high quality software that exceeds potential clients&apos; expectations.
      </p>

      <p className="mb-4 text-center">My Expertise spans across various domains, including Web development and mobile apps. we believe in the power of technology to transform business and improve lives</p>

    <div className="flex flex-col justify-center">
      <h2 className="text-xl">Creative <span className="font-semibold">Coding</span> brings ideas to <span>life</span></h2>
      <p>{monthsOfExperience} Months ago, I began my journey as a frontend web developer. Since then, I&apos;ve been honing my JavaScript skills, working or various projects, and collaborating with me and myself only</p>

      <div className="mt-2 flex mx-auto mb-8 space-x-4">
        <div className="relative flex-col after:bg-black/10 flex-1 after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold mb-2">{monthsOfExperience}+</div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Months Of Experience</div>
        </div>

        <div className="relative after:bg-black/10 flex flex-col after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold mb-2">2+</div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Satisfied Clients</div>
        </div>
        <div className="relative after:bg-black/10 flex flex-col after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold mb-2">4+</div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Completed Projects</div>
        </div>
        <div className="relative after:bg-black/10 flex flex-col after:w-[1px] after:h-full after:absolute after:top-0 after:right-0">
          <div className="text-2xl xl:text-4xl font-extrabold mb-2">6+</div>
          <div className="text-xs uppercase tracking-[1px] leading-[1.4]">Technologies Used</div>
        </div>
      </div>
    </div>
    </motion.div>
    </motion.section>
  )
}

function ContactSection () {
  return (
    <section id="contact" className="py-16 px-4 text-center bg-gray-100">
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Me</h2>
  <p className="text-gray-700 mb-4">
    Got a project or collaboration in mind?
  </p>
  <a
    href="mailto:your@email.com"
    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
  >
    Send an Email
  </a>
</section>

  )
}