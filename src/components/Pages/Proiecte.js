import Header from "../Header/Header"
import ProjectCard from "../Main/ProjectCard"
import Footer from "../Footer"

import { projects } from '../constants'


export default function Proiecte (props) {


    return (<>
        <Header/>
        <div className="projects">
            <h2>PROJECTS</h2>
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