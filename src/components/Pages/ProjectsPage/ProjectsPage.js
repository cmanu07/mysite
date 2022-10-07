import ProjectsCard from "./ProjectsCard"

import { projects } from "../../constants"

import "./ProjectsPage.css"


export default function ProjectsPage () {


    return (<>
        <div className="projects">
            <h2>PROJECTS</h2>
            <h5>Here are some of my own projects and you can find more on my <a href="https://www.github.com/cmanu07?tab=repositories" target="_blank" rel="noreferrer">GitHub</a> page.</h5>
            <div className="main-projects">
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
            </div>
        </div>
    </>)
}