"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../../public/assets/proj1.png";
import proj2 from "../../public/assets/proj2.png";
import proj3 from "../../public/assets/proj3.png";

const projects = [
  {
    title: "Project 1",
    thumbnail: proj1,
    techStack: ["Tech1", "Tech2", "Tech3"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ipsa accusamus! At natus recusandae adipisci asperiores architecto quis officiis,",
    github: "https://github.com/vijaymanikantareddy",
    live: "https://github.com/vijaymanikantareddy",
  },
  {
    title: "Project 2",
    thumbnail: proj2,
    techStack: ["Tech1", "Tech2", "Tech3"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ipsa accusamus! At natus recusandae adipisci asperiores architecto quis officiis,",
    github: "https://github.com/vijaymanikantareddy",
    live: "https://github.com/vijaymanikantareddy",
  },
  {
    title: "Project 3",
    thumbnail: proj3,
    techStack: ["Tech1", "Tech2", "Tech3"],
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, ipsa accusamus! At natus recusandae adipisci asperiores architecto quis officiis,",
    github: "https://github.com/vijaymanikantareddy",
    live: "https://github.com/vijaymanikantareddy",
  },
];

const ProjectsPage = () => {
  return (
    <div className="relative">
      <div className="text-center mt-32 dark:text-white text-neutral-800 text-[2.5rem] font-bold">
        Projects
      </div>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      <div className="flex flex-wrap justify-center mt-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            thumbnail={project.thumbnail}
            techStack={project.techStack}
            description={project.description}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
