import React from "react";

const OutPut = (props) => {
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Author: {props.author}</p>
            <p>Genre: {props.genre}</p>
            <p>Pages amount:{props.pages}</p>
        </div>
    )
}

export default OutPut;