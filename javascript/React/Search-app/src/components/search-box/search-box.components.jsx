import React from 'react';
import './search-box.styles.css';

export const SearchEngine = props => (
    <input className = "search"
    type = "search"
    placeholder = "search here"
    onChange = {props.onSearchChange}/>
);