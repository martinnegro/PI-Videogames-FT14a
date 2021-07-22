import React from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import App from './App'

function AppWrapper() {
    return (
        <Provider store={store}>
            <App/>  
        </Provider>
    )
}

export default AppWrapper;
