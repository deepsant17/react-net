import React from "react";
import './card.styles.css'

export let Card=(props)=>{

return (<div className="card-container">
<img alt='avtar' src={`https://robohash.org/${props.avtar.id}?set=set2&size=180x180`}/>
<h2>{props.avtar.name}</h2>
<p>{props.avtar.email}</p>
</div>)

}
//
//https://www.superherodb.com//pictures2//portraits//10//100//3.jpg