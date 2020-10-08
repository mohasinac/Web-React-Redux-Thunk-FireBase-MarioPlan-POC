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
                firebase.logout()
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

export const signUp =(newUser) =>{
    return (dispatch,getState , { getFirestore, getFirebase  })=>{
        const firebase = getFirebase()
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email ,
            newUser.password
        ).then( (resp)=>{
            const fireStore = getFirestore()
            return fireStore.collection('users').doc(resp.user.uid).set({
                firstName :newUser.firstName.trim() ,
                lastName : newUser.lastName.trim() ,
                initials : newUser.firstName.trim()[0] + newUser.lastName.trim()[0]
            })
            
            
        }
        ).then(()=>{
            dispatch({
                type:'USER_SIGNUP_SUCESS'
            })
        }).catch(err =>{
            return  dispatch({
                type:'USER_SIGNUP_ERROR',
                err
            })
        })
    }
}