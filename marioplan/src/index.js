import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import rootReducer from './store/reducers/rootReducer'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig,{
      attachAuthIsReady: true
    }), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);
console.log(store)
store.firebaseAuthIsReady.then(
  () => {

    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
      ,
      document.getElementById('root')
   );
  }
)

