// Write your Character component here
import React from 'react'


const Character = props => {
    
    return (
        <div>
            <img src = {props.image}></img>
            <h2>{props.name}</h2>
            <p>{props.status}</p>
            <p>{props.species}</p>
            <p>{props.gender} </p>
        </div>
    )
}

export default Character