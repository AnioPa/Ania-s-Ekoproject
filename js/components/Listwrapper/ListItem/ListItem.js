import React from 'react';
import './ListItem.css'
import Animals from '../../../../images/animals.jpg';



const ListItem =()=> (
    <li className='listItem__wrapper'>
        <img src={Animals} className='listItem__image'/>
        <div>
            <h2 className='listItem__header'> </h2>
            <p className='listItem__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, ratione.</p>
            <button className='listItem__button'>Klik</button>
        </div>
    </li>
);

export default ListItem;