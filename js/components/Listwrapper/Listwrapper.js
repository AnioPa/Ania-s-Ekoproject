import React from 'react';
import ListItem from './ListItem/Listitem';
import './ListWrapper.css'
import {TypesOfRubbish} from '../../data/TypesOfRubbish.js'


const ListWrapper = () => (
    <ul className='listWrapper__wrapper'>
        <ListItem  />
    </ul>

);

export default ListWrapper;