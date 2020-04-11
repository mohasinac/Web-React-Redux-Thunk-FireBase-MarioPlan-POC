export const createProject = (project) => {
    return (dispatch, getState ,{
        getFirestore,
        getFirebase
    }) => {
        const profile = getState().firebase.profile
        const auth = getState().firebase.auth
        const fireStore = getFirestore()
        return fireStore.collection('projects').add({
            ...project,
            authorFirstName : profile.firstName ,
            authorLastName :profile.lastName,
            authorId : auth.uid,
            createdAt : new Date()
        }).then(()=>{
            dispatch({
                type: 'ADD_PROJECT',
                project
            })
        }).catch( err=>{
            dispatch({
                type: 'ADD_PROJECT_ERROR',
                err
            })
        } )
        
        
    }
}