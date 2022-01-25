import React from "react";
import './card-list.styles.css'
import { Card } from "../card/card.component";

export let CardList=(props)=>{
return <div className="card-list">{props.avtars.map(avtar=>(
    <Card key={avtar.key} avtar={avtar}/>
    ))}
    </div> // this is jsx
}

/*
here props is the properties 
which we are assigning to the cardlist
react function component.
here, props.childern means we are accessing the children of the cardlist 
component which we will be using in App.js
*/