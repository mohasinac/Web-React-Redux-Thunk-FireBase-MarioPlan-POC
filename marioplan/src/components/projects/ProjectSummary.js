import React from 'react'
import moment from 'moment'

function ProjectSummary({project}) {
    if(project){
        return (
            <div className="card z-depth-0 project-summary">
                        <div className="card-content grey-text text-darken-3">
                            <span className="card-title">{project.title}</span>
                            <p>Posted by Mohsin Chinnapattan</p>
                            <p className="grey-text"> { moment( new Date(project.createdAt)).calendar()} </p>
                        </div>
            </div>
        )
    }
    else{
        return null
    }
    
}

export default ProjectSummary
