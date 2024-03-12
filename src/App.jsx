import styles from "./App.module.css";
import { About } from "./Components/About/About";
import Certification from "./Components/Certification/Certification";
import Contact from "./Components/Contact/Contact";
import Count from "./Components/Count/Count";
import Header from "./Components/Cover/Header";
import { Experience } from "./Components/Experience/Experience";
import Footer from "./Components/Footer"
import Navbar from "./Components/Header/Navbar"
import ProjectsSection from "./Components/Projects/Projectsection";

function App() {
  return (
    <>
      <div className={styles.App}>
      <Navbar/>
      <Header/>
      <Count/>
      <About/>
      <Experience/>
      <ProjectsSection/>
      <Certification/>
      <Contact/>
      <Footer/>
      </div>
     
    </>
  )
}

export default App
