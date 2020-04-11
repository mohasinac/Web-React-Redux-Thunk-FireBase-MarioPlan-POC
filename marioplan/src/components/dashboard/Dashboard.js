import React, { Component } from 'react'
import Notifcations from './Notifications'
import ProjectList from './../projects/ProjectList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class Dashboard extends Component {

    render() {
        const { auth } = this.props
        if ( !auth || !auth.uid) {
            return (
                <Redirect to="/login"></Redirect>
            )

        }
        const { projects ,notifications } = this.props
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s11 m5 offset-m1">
                        <Notifcations notifications = {notifications} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications : state.firestore.ordered.notifications
    }
}
export default
    compose(
        connect(mapStateToProps, null),
        firestoreConnect([{
            collection: 'projects',
            orderBy :['createdAt','desc']
        },
        {
           collection:'notifications',
           limit : 3 ,
           orderBy :['time','desc']
        }
        ])
    )(Dashboard)