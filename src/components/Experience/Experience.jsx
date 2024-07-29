import React from "react";
import styles from "./Experience.module.css";
import skills from "/src/data/skills.json";
import history from "/src/data/history.json";
import { getImageUrl } from "/src/utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Certifications</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={getImageUrl(historyItem.imageSrc)}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.certificate}, ${historyItem.organisation}`}</h3>
                <p>{historyItem.issuedDate}</p>
                <div className={styles.skillsContainer}>
                  {historyItem.skills.join(', ')}
                </div>
                <a href ={`${historyItem.cred}`}className={styles.credentialLink} target="_blank" >
                  Show Credential
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
