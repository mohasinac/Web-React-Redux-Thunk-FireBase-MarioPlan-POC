import React from 'react'

function ProjectSummary({project}) {
    if(project){
        return (
            <div className="card z-depth-0 project-summary">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{project.title}</span>
                            <p>Posted by Mohsin Chinnapattan</p>
                            <p className="grey-text">10th April 2020</p>
                        </div>
            </div>
        )
    }
    else{
        return null
    }
    
}

export default ProjectSummary
