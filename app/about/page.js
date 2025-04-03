"use client";
import Link from "next/link";
import React, {useState} from "react";

function AboutPage() {

    const [news, setNews]= useState({});
    const [searchQuery, setSearchQuery] = useState(React);
    const [count, setCount]= useState(0);

      const increment=() => {
        setCount(count+1);
      };




  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
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
      
      

    </div>
    
  );
  
}

export default AboutPage;