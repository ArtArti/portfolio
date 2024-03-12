import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import resume from './../../assets/resume.pdf'
import about from './../../assets/about/about.jpeg'

const Header = () => {
  const { t , i18n} = useTranslation('');
  
  const handleDownloadPDF = () => {
    const anchor = document.createElement('a');
    anchor.href = resume; 
    anchor.download = 'resume.pdf'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <section className="lg:py-16 mx-3" id="home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
            {t('cover.hello')}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                `${t('cover.name')}`,
                1000,
                "Web Developer",
                1000,
                "Full stack Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />

          </h1>
          <p className="text-base sm:text-lg mb-6 lg:text-xl">
          I'm a full-stack developer with 1 years of professional experience using React and
          NodeJS. Reach out if you'd like to learn more!
          </p>
          <div>
            <a
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-600 hover:bg-slate-200 text-white"
            >
             {t('cover.connect')}
            </a>
            <button
             onClick={handleDownloadPDF}
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-600 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              {t('cover.cv')}
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="col-span-4 place-self-center mt-4 lg:mt-0"
    >
      <div className="relative rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden">
        <img
          src={about}
          alt="profile image"
          className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-purple-500"
          style={{ zIndex: 1 }}
        />
      </div>
    </motion.div>
      </div>
    </section>
  );
};

export default Header;