import React from 'react'
import {connect  } from 'react-redux'
import { compose} from 'redux'
import { firestoreConnect} from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

const ProjectDetails = (props) => {
    const { auth } = props
        if ( !auth || !auth.uid) {
            return (
                <Redirect to="/login"></Redirect>
            )

        }
    console.log(props)
    const {project} = props
    if(project){
        
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}  </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
        <div>Posted By {project.authorFirstName} {project.authorLastName}</div>
                        <div>{project.createdAt.toString()}</div>
                    </div>
                </div>
            </div>)
    }
    else{
        return(
            <div className="container center section project-details">
                <div className="card z-depth-0">
                    Loading Project ...
                </div>
            </div>)
    }
    
    
}
const mapStateToProps = (state , ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.fireStore.data.projects
    const project = projects ? projects[id] : null
    return {
        project : project,
        auth: state.firebase.auth
    }
}
export default
    compose(connect(mapStateToProps , null),
    firestoreConnect([
        {
            collection:'projects'
        }
    ])
    ) (ProjectDetails)
