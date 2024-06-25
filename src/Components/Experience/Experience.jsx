import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import { useTranslation } from "react-i18next";
export const Experience = () => {
  const { t } = useTranslation(); 
  
  const history = t('history', { returnObjects: true });
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>{t('exp.experience')}</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
      {history.map((historyItem, id) => (
        <li key={id} className={styles.historyItem}>
          <div className={styles.historyItemDetails}>
            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
            <hr className="text-white" />
            <ul>
              {historyItem.experiences.map((experience, expId) => (
                <li key={expId}>{experience}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
      </div>
    </section>
  );
};
