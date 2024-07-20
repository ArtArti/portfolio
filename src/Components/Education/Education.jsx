import React from "react";
import styles from "./Education.module.css";
import cursorIcon from "./../../assets/about/cursorIcon.png";
import { useTranslation } from "react-i18next";
export default function Education() {
  const { t } = useTranslation();

  const education = t("education", { returnObjects: true });
  return (
    <>
      <section className={styles.container} id="education">
        <h2 className={styles.title}> {t("header.education")}</h2>
        <div className={styles.content}>
          <ul className={styles.aboutItems}>
            {education.map((education, id) => {
              return (
                <>
                  <li key={id} className={styles.aboutItem}>
                    <img src={cursorIcon} alt="icon" />
                    <div className={styles.aboutItemText}>
                      <h3>{education.course}</h3>
                      <p>
                        <span className=" text-sm text-slate-700 font-thin">
                          {education.college}
                          <br />
                          {education.session}
                        </span>
                      </p>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
