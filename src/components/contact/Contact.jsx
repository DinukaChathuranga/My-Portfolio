import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '/src/utils';

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className={styles.icon} />
                    <a href="mailto:dinukacw4501@gmail.com" className={styles.link}>dinukacw4501@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" className={styles.icon} />
                    <a href="https://www.linkedin.com/in/dinuka-chathuranga-01a2321a9/" className={styles.link}>linkedin.com/dinuka-chathuranga</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" className={styles.icon} />
                    <a href="https://github.com/DinukaChathuranga" className={styles.link}>github.com/DinukaChathuranga</a>
                </li>
            </ul>
        </footer>
    );
};
