import Header from "../Header/Header"
import ProjectCard from "../Main/ProjectCard"
import Footer from "../Footer"

import { projects } from '../constants'


export default function Proiecte () {


    return (<>
        <Header/>
        <div className="projects">
            <h2>PROJECTS</h2>
            <h5>Here are some of my own projects and you can find more on my <a href="https://www.github.com/cmanu07?tab=repositories" target="_blank" rel="noreferrer">GitHub</a> page.</h5>
            <div className="main-projects">
                {projects.map((card, index) => {
                    const {name, url, imagine, description} = card;

                    return <ProjectCard
                            key={index}
                            title={name}
                            url={url}
                            imagine={imagine}
                            description={description}
                    />
                })}
            </div>
        </div>
        <Footer/>
    </>)
}