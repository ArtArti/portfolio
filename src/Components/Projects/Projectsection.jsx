import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { t } from "i18next";
import { useTranslation} from "react-i18next";
const projectsData = [
  {
    id: 1,
    title: "React gallery App",
    description: "Project 1 description",
    image: "/project/art.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://art-gallery-kappa-flax.vercel.app/",
  },
  {
    id: 2,
    title: "Notes Planner Website",
    description: "Project 2 description",
    image: "/project/notes.png",
    tag: ["All", "Backend"],
    gitUrl: "/",
    previewUrl: "https://note-planner-client.vercel.app/",
  },
  {
    id: 3,
    title: "React Portfolio App",
    description: "Project 3 description",
    image: "/project/portfolio.png",
    tag: ["All", "Frontend","Backend"],
    gitUrl: "/",
    previewUrl: "https://portfolio-eta-topaz-86.vercel.app/",
<<<<<<< HEAD
  },
  {
    id: 4,
    title: "React News App",
    description: "Project 3 description",
    image: "/project/news.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "https://daily-buzz.vercel.app/",
=======
>>>>>>> 2e5c797ed25fd3b1509be0fccfa7d5810a4fa86c
  },
];

const ProjectsSection = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {t} = useTranslation();

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className=" ml-2 mr-2 mt-48 mb-20">
      <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
        {t('project.project')}
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
