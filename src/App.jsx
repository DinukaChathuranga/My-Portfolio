import React, { useState } from 'react';
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience} from "./components/Experience/Experience";
import { Projects} from "./components/Projects/projects";
import { Contact } from "./components/contact/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        
        
      </div>
    
  ); 
}

export default App   
