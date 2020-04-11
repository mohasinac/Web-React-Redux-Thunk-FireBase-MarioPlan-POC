export const signIn = (credentials)=>{
    return (dispatch,getState , { getFirestore, getFirebase  })=>{
        const firebase = getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email ,
            credentials.password
        ).then( ()=>{
            return dispatch({
                type:'USER_SIGNIN_SUCEESS',
                credentials
            }) 
        }
        ).catch( err=>{
            console.log(err)
            return  dispatch({
                type:'USER_SIGNIN_ERROR',
                err
            })
        })
        
    }
}

export const signOut = () =>{
    return (dispatch,getState , { getFirestore, getFirebase  })=>{
        const firebase = getFirebase()
        firebase.auth().signOut().then(
            ()=>{
                return dispatch({
                    type:'USER_SIGNOUT_SUCEESS',
                    
                }) 
            }
        ).catch(err=>{
            return  dispatch({
                type:'USER_SIGNOUT_ERROR',
                err
            })
        })
    }
}