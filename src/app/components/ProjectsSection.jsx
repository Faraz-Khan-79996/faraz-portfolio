"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Online Judge",
    description: "Online Coding platform",
    image: "/images/projects/p11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Faraz-Khan-79996/judge",
    previewUrl: "http://ec2-65-1-93-96.ap-south-1.compute.amazonaws.com:3000/",
  },
  {
    id: 7,
    title: "Motorexpresso",
    description: "Paid web platform to manage RC information for a firm.",
    image: "/images/projects/p0.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Faraz-Khan-79996",
    previewUrl: "https://motorexpresso.com/",
  },
  {
    id: 2,
    title: "Anajwala",
    description: "Groceries startup",
    image: "/images/projects/p2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Faraz-Khan-79996/anaajwala-ecommerce",
    previewUrl: "https://www.anajwala.com/",
  },
  {
    id: 3,
    title: "Blog app",
    description: "Simple web based blogging application",
    image: "/images/projects/p3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Faraz-Khan-79996/blog-app",
    previewUrl: "https://blog-app-vercel-backend-one.vercel.app/",
  },
  {
    id: 4,
    title: "Estate Vista",
    description: "Online Real-estate listing platform",
    image: "/images/projects/p4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Faraz-Khan-79996/real-estate",
    previewUrl: "https://real-estate-weld-five-35.vercel.app/",
  },
  {
    id: 5,
    title: "AI Image problem solver",
    description: "Uses OCR and LLM to answer the problem in the image.",
    image: "/images/projects/p5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Faraz-Khan-79996/frontend-mentorship",
    previewUrl: "https://frontend-mentorship-eight.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.02 }}
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
