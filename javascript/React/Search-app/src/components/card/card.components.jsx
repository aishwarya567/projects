import React from 'react';
import './card.styles.css';
export const Card = props =>(
    <div>
        <h2 className = "card-container">
        <img alt= "monsters" src = {`https://robohash.org/${props.monster.id}?set=set4&size=110x280`}/>
           {props.monster.name}
           <p>{props.monster.email}</p></h2>

        
    </div>
);