"use client";
import Link from "next/link";
import React, {useState} from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";


function AboutPage() {

    const [news, setNews]= useState({});
  const [searchQuery, setSearchQuery] = useState(React);
    const [count, setCount]= useState(0);

      const increment=() => {
        setCount(count+1);
      };


  return (
    

    <div style={{ padding: '20px' }} className="bg-black text-white p-4">
      <div className="flex justify-center"> 
      <section className="text-center py-20 text-white">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Zena 👋</h2>
      <TypeAnimation
        sequence={[
          'Cybersecurity Engineer 🔐', 2000,
          'Full-stack Developer 💻', 2000,
          'A SOC analyst', 2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl"
      />
    </section>
        <header className="text-center mb-12">
          <motion.div
            className="w-40 h-40 rounded-full mx-auto mt-10"
            initial={{ y: 200, x:-100, opacity: 0 }} // start from bottom
            animate={{ y: 0, x: 0, opacity: 1 }}   // move to top center
            transition={{
              duration: 0.8,       // fast motion
              ease: 'easeOut',
              delay: 0.2,          // slight delay before start
            }}
          >
        
            <Image
              src="/images/proff.png"
              alt="Zena's Profile"
              width={500}
              height={700}
              priority
              className="rounded-full border-4 border-black shadow-lg"
            />
          </motion.div>
        </header>

      </div>
    
      <div className="flex flex-col items-center justify-center">
        <div>
      <section className="mt-12" >
       
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300">
              Passionate software engineer with expertise in cybersecurity, web development, and trading.
            </p>
              
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-gray-300">BSc in Software Engineering & Computing Technology - Addis Ababa University</p>
        
      </section>
      </div>
      <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        

              <h3 className="text-xl font-semibold mb-2">E-commerce App</h3>
              <p className="text-gray-300">Full-stack application built with Angular & Node.js.</p>
           
         
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Dashboard</h3>
              <p className="text-gray-300">SOC dashboard for threat detection & monitoring.</p>
           

      </section>
      </div>
      <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>Web Development</li>
          <li>Cybersecurity</li>
          <li>Penetration Testing</li>
          <li>SOC analyst</li>
          <li>web/data scraping and automation</li>
        </ul>
      </section>
      </div>
      <div>
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <p className="text-gray-300">Markatable software development from international trade center</p>
        <p className="text-gray-300">introduction to cyber security from cisco</p>
        <p className="text-gray-300">tools of data science from coursera</p>

      </section>
      </div>
      </div>
      
      
      <footer className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <div className="flex justify-center gap-6 text-2xl">
          <Link href="https://github.com/zienamarkos" className="text-blue-400"><FaGithub /></Link>
          <Link href="#" className="text-blue-600"><FaLinkedin /></Link>
          <Link href="#" className="text-red-400"><FaEnvelope /></Link>
        </div>
      </footer>
  
      

    </div>
    
  );
  
}

export default AboutPage;



  