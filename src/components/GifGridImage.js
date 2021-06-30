import React from 'react'

export const GifGridImage = (props) => {
    return (
        <div className="card animate__animated animate__fadeInDown">
            <img src={props.url} alt={ props.title}></img>
            <p> {props.title} </p>
        </div>
    )
}
