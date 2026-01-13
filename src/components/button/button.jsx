import React from "react";

export default function Button(type, className, onClick, children) {

    return(
        <button 
        type={type}
        className={`button ${className}`}
        onClick={onClick}
        >{children}</button>
    )
}