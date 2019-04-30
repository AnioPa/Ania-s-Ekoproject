import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require ('../index.css');

document.addEventListener('DOMContentLoaded',function(){

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});