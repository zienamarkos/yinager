"use client";
import Link from "next/link";
import React, {useState} from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";


function AboutPage() {

    const [news, setNews]= useState({});
    const [searchQuery, setSearchQuery] = useState(React);
    const [count, setCount]= useState(0);

      const increment=() => {
        setCount(count+1);
      };




  return (
    <div style={{ padding: '20px' }} className="bg-black text-white p-4">
      {/* <h1>About Us</h1>
      <p>
        This is the about page of our wonderful application. 
        We're here to showcase our skills and maybe sell some stuff.
      </p>
      <Link href="/" className="px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all active:scale-95"
      >
            Back to Home
      </Link>
      <br></br>
      <button onClick={increment} className="mt-10 px-6 py-2 text-lg font-medium text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all active:scale-95"
      >clicked {count} times</button>
       */}
      <header className="text-center mb-12">
      <motion.div
      className="flex justify-center items-center"
      animate={{
        x: [-200, 0, 200], // Slide in from the right, stay in the middle, and slide out to the left
        opacity: [0, 1, 0], // Fade in and then fade out
      }}
      transition={{
        duration: 10, // Duration for each cycle (in seconds)
        ease: "easeInOut", // Easing function for smooth animation
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "loop", // Ensure it loops continuously
      }}
    >
      <div>
      <h1>Zienamarkos Molla</h1>
          <Image
            
            src="/images/cartonn.png"
            alt="Zena's Profile"
            width={550}
            height={450}
            className="rounded-full border-4 border-black shadow-lg"            
          />
          
        </div>
          
        </motion.div>
        <h1 className="text-4xl font-bold">Zena's Portfolio</h1>
        <p className="text-gray-400">Software Engineer & Cybersecurity Specialist</p>
      </header>
      
      <section className="grid md:grid-cols-2 gap-8" >
        <Card className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300">
              Passionate software engineer with expertise in cybersecurity, web development, and trading.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p className="text-gray-300">BSc in Software Engineering & Computing Technology - Addis Ababa University</p>
          </CardContent>
        </Card>
      </section>
      
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">E-commerce App</h3>
              <p className="text-gray-300">Full-stack application built with Angular & Node.js.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Dashboard</h3>
              <p className="text-gray-300">SOC dashboard for threat detection & monitoring.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Professional Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>Web Development</li>
          <li>Cybersecurity</li>
          <li>Penetration Testing</li>
          <li>Forex Trading</li>
          <li>ICT Strategy</li>
        </ul>
      </section>
      
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Certifications</h2>
        <p className="text-gray-300">Certified Ethical Hacker (CEH), CompTIA Security+</p>
      </section>
      
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



