const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
}
const projectReducer =(state=initState,action) =>{
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log('added project ', action.project)
            return state
        case 'ADD_PROJECT_ERROR':
            console.log('add project error', action.err)
        default:
            return state
    }
}

export default projectReducer;