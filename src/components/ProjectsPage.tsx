"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../../public/assets/portfoliopic.jpg";
import proj2 from "../../public/assets/cmsproject.jpg";
import proj3 from "../../public/assets/votingproject11.jpg";
import proj4 from "../../public/assets/gymlandingpage.png";

const projects = [
	{
		title: "Portfolio",
		thumbnail: proj1,
		techStack: ["Next JS", "Tailwind CSS"],
		description:
			"Developed a professional online portfolio showcasing a diverse range of projects. Effectively demonstrated technical skills through a visually appealing platform.",
		github: "https://github.com/vijaymanikantareddy/vijayportfolio",
		live: "https://main--vijaymanikantareddy-portfolio.netlify.app/",
	},
	{
		title: "Central Maintenance System",
		thumbnail: proj2,
		techStack: ["React JS", "Mongo DB", "Node JS"],
		description:
			"Developed a web application for efficient infrastructure issue management. Users can submit complaints, track their status, while admin can assign and manage them.",
		github: "https://github.com/vijaymanikantareddy",
		// live: "https://github.com/vijaymanikantareddy",
	},
	{
		title: "Voting Application",
		thumbnail: proj3,
		techStack: ["React JS", "Mongo DB", "Node JS"],
		description:
			"Developed a system for efficient project management, including data input, voting management, and team monitoring. Ensured data integrity and transparent communication.",
		github: "https://github.com/vijaymanikantareddy",
		// live: "https://github.com/vijaymanikantareddy",
	},
	{
		title: "Landing Page",
		thumbnail: proj4,
		techStack: ["HTML", "CSS", "Javascript"],
		description:
			"Developed a visually appealing and interactive gym website landing page. Utilized HTML, CSS, and JavaScript to create a user-friendly experience with engaging elements.",
		github: "https://github.com/vijaymanikantareddy/Frontend/tree/main/Landing%20Page",
		live: "https://vijaymanikantareddy.github.io/Frontend/Landing%20Page/index.html",
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
