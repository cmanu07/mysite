
import React from 'react'

const ProjectCard = ({title, url, imagine, description}) => {
  return (
    <a className='project-card' href={url}>
        <h6>{title}</h6>
        <img src={imagine} alt='...'></img>
        <p>{description}</p>
    </a>
  )
}

export default ProjectCard