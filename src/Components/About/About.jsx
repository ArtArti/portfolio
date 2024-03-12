import React from "react";
import styles from "./About.module.css";
import cursorIcon from './../../assets/about/cursorIcon.png'
import tag from './../../assets/about/tag.png'
import serverIcon from './../../assets/about/serverIcon.png'
import uiIcon from './../../assets/about/uiIcon.png'
import { useTranslation } from "react-i18next";
export const About = () => {
  const { t } = useTranslation("");

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t('header.about')}</h2>
      <div className={styles.content}>
        <img
          src={tag}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> {t("about.frontend")}</h3>
              <p>
                {t('about.des1')}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('about.backend')}</h3>
              <p>
              {t('about.des2')}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>{t('about.ui')}</h3>
              <p>
              {t('about.des3')}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
