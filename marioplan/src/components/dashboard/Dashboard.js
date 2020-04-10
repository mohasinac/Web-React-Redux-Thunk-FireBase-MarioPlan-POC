import React, { Component } from 'react'
import Notifcations from './Notifications'
import ProjectList from './../projects/ProjectList'

 class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard container">
               <div className="row">
                   <div className="col s12 m6">
                       <ProjectList/>
                   </div>
                   <div className="col s11 m5 offset-m1">
                       <Notifcations/>
                   </div>
               </div>
            </div>
        )
    }
}

export default Dashboard