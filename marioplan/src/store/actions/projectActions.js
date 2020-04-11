export const createProject = (project) => {
    return (dispatch, getState ,{
        getFirestore,
        getFirebase
    }) => {
        const fireStore = getFirestore()
        return fireStore.collection('projects').add({
            ...project,
            authorFirstName : "Mohsin",
            authorLastName :"C",
            authorId :1234,
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