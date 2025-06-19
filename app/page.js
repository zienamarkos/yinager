import Image from 'next/image';
import Link from 'next/link';
import Certificates from './components/certificates';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import Navbar from './components/navbar';
import Testimonials from './components/testimonial';


// import { Router, useRouter } from 'next/router';

export default function Home() {
  return (

    <div className="font-sans">
      <Navbar/>
      {/* Hero Section */}
      <header className="bg-gray-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Your Gateway to Global Trade
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Seamlessly import and export products worldwide.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <Image
                    src="/images/constr.webp" //Placeholder. Replace with an actual path
                    alt="Import Services"
                    width={700}
                    height={500}
                    className="mx-auto mb-4"
                />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                construction materials import Services
              </h3>
              <p className="text-gray-600">
                Sourcing, quality control, and shipping of high level construction materials to your doorstep.
              </p>
            </div>
             {/* Service Card 2 */}
             <div className="bg-white shadow-md rounded-lg p-6">
                <Image
                   src="/images/dani.png"  //Placeholder. Replace with an actual path
                   alt="Export Services"
                   width={700}
                   height={500}
                   className="mx-auto mb-4"
                />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Fruits,vegetables and crops export Services
              </h3>
              <p className="text-gray-600">
                Access new markets and ship your products around the world with ease.
              </p>
            </div>
              {/* Service Card 3 */}
             <div className="bg-white shadow-md rounded-lg p-6">
               <Image
                    src="/images/hotel.webp" //Placeholder. Replace with an actual path
                    alt="Logistics and Customs Clearance"
                    width={700}
                    height={500}
                    className="mx-auto mb-4"
                />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Hotel and house utilities
              </h3>
              <p className="text-gray-600">
                Order high quality utilities for hotels, restaurants and even your house.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
                 <Image
                  src="/images/danii.webp" //Placeholder. Replace with an actual path
                  alt="About Us"
                  width={700}
                  height={500}
                 className="rounded-lg shadow-md"
                />
            </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 mb-4">
              We are a team of experienced professionals dedicated to facilitating smooth and efficient import and export transactions for businesses of all sizes. Our expertise covers a variety of product categories and countries.
            </p>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
             Learn More
            </button>
            <a href="/about">
                Learn more about us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Contact Us
          </h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
             <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <Link href="/about" target="_blank" rel="noopener noreferrer">
            <button
              type="submit"
              
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
            </Link>
          </form>
          <Link href="/about" target="_blank" rel="noopener noreferrer">
            <button
              // type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
            </Link>
        </div>
      </section>

      <Testimonials/>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-4 text-center text-gray-300 mt-5">
        <p>© {new Date().getFullYear()} Zienamarkos Molla. All rights reserved.</p>
      </footer>
    </div>
  );
}