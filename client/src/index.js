import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import {persistor,store} from "./redux/boutique";


ReactDOM.render(
    <Provider store={store}>  
        {/* PersistGate wraps the App component to ensure persistence of Redux state */}
    <PersistGate loading={null} persistor={persistor}><App /> </PersistGate> </Provider>, 
    document.getElementById('root')
);
