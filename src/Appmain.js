import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App2 from './App2';

const Appmain = () => {
    return (
        <>
<Provider store = { store } >
    <App2 />
    </Provider>
        </>
    );
}

export default Appmain;

