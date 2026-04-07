import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div style={{fontFamily:'Arial, sans-serif'}}>
      <div style={{
        height:'400px',
        backgroundImage:'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
        backgroundSize:'cover',
        color:'white',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <h1>Badu Island Cultural Tours</h1>
          <p>Experience Torres Strait Island Culture</p>
        </motion.div>
      </div>

      <div style={{padding:'20px'}}>
        <h2>Tour Packages</h2>
        <ul>
          <li>3 Hour Cultural Tour</li>
          <li>Half Day Tour</li>
          <li>Full Day Experience</li>
        </ul>

        <h2>Contact</h2>
        <p>Email: info@baduislandtours.com</p>
      </div>
    </div>
  );
}
