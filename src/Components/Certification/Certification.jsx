import React from 'react';
import styles from './certificate.module.css'; 
import webd from './../../assets/certificate/webd.png';
import oci from './../../assets/certificate/oci.jpg';
import iot from './../../assets/certificate/iot.png';
import sql from './../../assets/certificate/sql.jpg';
import js from './../../assets/certificate/js.jpg';
import { useTranslation } from 'react-i18next';
const Certificate = () => {

  const {t} = useTranslation();

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <section id="certificate" className=' mt-32'>
    <div className={styles.container1}>
      <h2 className={styles.title}>{t('certificate.certificate')}</h2>
      <div className={styles.content}>
        <div className="carousel h-96 rounded-box" style={{ width: "80%"}}>
          <div id="s1" className="carousel-item relative w-full">
            <img
              src={webd}
              className="w-full"
              alt="Tailwind CSS Carousel component"
              onClick={() => handleImageClick(webd)}
            />
           
          </div>
          <div id="s2" className="carousel-item relative w-full">
            <img
              src={oci}
              className="w-full"
              alt="OCI Certificate"
              onClick={() => handleImageClick(oci)}
            />
          
          </div>
          <div id="s3" className="carousel-item relative w-full">
            <img
              src={iot}
              className="w-full"
              alt="OCI Certificate"
              onClick={() => handleImageClick(oci)}
            />
            
          </div>
          <div id="s4" className="carousel-item relative w-full">
            <img
              src={sql}
              className="w-full"
              alt="OCI Certificate"
              onClick={() => handleImageClick(oci)}
            />
            
          </div>
          <div id="s5" className="carousel-item relative w-full">
            <img
              src={js}
              className="w-full"
              alt="OCI Certificate"
              onClick={() => handleImageClick(oci)}
            />
            
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Certificate;
