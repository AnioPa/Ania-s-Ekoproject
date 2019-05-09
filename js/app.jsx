import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
require ('../css/main.scss');

document.addEventListener('DOMContentLoaded',function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});