import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import Reducers from './reducers';
//provider makes the reddux store available to any nested components that have been wrapped in 
//the connect function  
const ComposeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// for this google redux dev tools github link  
const store=createStore(Reducers,ComposeEnhancer(applyMiddleware(thunk)))
ReactDOM.render(
<Provider store={store}>
<App/>    
</Provider>
,document.getElementById('root'))