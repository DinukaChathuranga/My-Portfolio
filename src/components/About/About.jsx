import React, { useState } from 'react';

import styles from "./About.module.css";
import{ getImageUrl } from '/src/utils';

export const About =() => {
    return (
    <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img
        src = {getImageUrl("about/mans.png")}
        alt ="Me sitting with a laptop"
        className={styles.aboutimage}
        />
        <ul className={styles.aboutitems}>
            <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon "/>
        <div className={styles.aboutitemText}>
            <h3>Frontend Developer</h3>
            <p>
               I'm a frontend developer with experience in building responsive and optimized sites 
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server icon "/>
        <div className={styles.aboutitemText}>
            <h3>Backend Developer</h3>
            <p>
               i have experience developing fast and optimized back-end systems and APIs
            </p>
        </div>
        </li>
        <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="robot icon "/>
        <div>
            <h3>IOT Engineer</h3>
            <p>
            I have experience designing and implementing secure IoT systems, integrating advanced robotics, and creating smart solutions that enhance automation
            </p>
        </div>
        </li>
        </ul>
    </div>
    </section>
    );
};