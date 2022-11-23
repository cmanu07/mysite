import ProjectsCard from "./ProjectsCard"

import { projects } from "../../constants"

import { motion } from "framer-motion"

import "./ProjectsPage.css"


export default function ProjectsPage () {


    return (
        <section className="projects">
            <h2>PROJECTS</h2>
            <h5>Here are some of my own projects and you can find more on my <a 
                href="https://www.github.com/cmanu07?tab=repositories"
                target="_blank" rel="noreferrer">GitHub</a> page.
            </h5>
            <motion.div className="main-projects"
                initial = {{y: '-100vw'}}
                animate = {{y: 0}}
                transition = {{type: 'spring', duration: 1.1, bounce:0.4}}
            >
                {projects.map((card, index) => {
                    const {name, url, imagine, description} = card;

                    return <ProjectsCard
                            key={index}
                            title={name}
                            url={url}
                            imagine={imagine}
                            description={description}
                    />
                })}
            </motion.div>
        </section>
    )
}