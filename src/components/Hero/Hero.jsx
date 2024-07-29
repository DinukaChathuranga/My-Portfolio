import React, { useState } from 'react';

import styles from "./Hero.module.css";
import{ getImageUrl } from '/src/utils';

export const Hero =() => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Dinuka Chathuranga</h1>
            <p className={styles.description}>Hello! I'm a passionate and dedicated Full-Stack Developer specializing in .NET and C# languages. As an undergraduate student at Sabaragamuwa University of Sri Lanka, I have developed a strong foundation in software engineering principles and a keen interest in creating robust and scalable web & desktop applications. I am also proficient in Java and continuously explore its capabilities. Additionally, I have a deep interest in robotics, combining my software engineering skills with innovative technologies to create exciting and impactful projects.</p>
            <a href="mailto:dinukacw4501@gmail.com" className={styles.contactbt}>Contact Me</a>

        </div>
        <img src={getImageUrl("hero/dp.png")} alt = "image of me" className={styles.dp}/>
        <div className={styles.topBlur}/>
        <div classname={styles.bottomBlur}/>
          
    </section>
    )
    ;
};