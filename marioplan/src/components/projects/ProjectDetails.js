import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id}</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum pariatur voluptatem natus, praesentium tempore provident. Quos fuga, consequatur reiciendis commodi perspiciatis ratione ab placeat nesciunt tempore doloribus neque libero? Sequi?</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted By Mohasin</div>
                    <div>10th April 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
