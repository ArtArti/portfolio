import React, { useState } from 'react';
import styles from './certificate.module.css'; 
import webd from './../../assets/certificate/webd.png';
import oci from './../../assets/certificate/oci.png';
import iot from './../../assets/certificate/iot.png';

const Certificate = () => {

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <section id="education" className=' mt-32'>
    <div className={styles.container1}>
      <h2 className={styles.title}>Education & Certification</h2>
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
        </div>
      </div>
    </div>
    </section>
  );
};

export default Certificate;
