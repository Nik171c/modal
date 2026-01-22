import React from "react";

export default function Button({ type, className, onclick, children }) {

    return (
        <button
            type={type}
            className={`button ${className}`}
            onClick={onclick}
        >{children}</button>
    )
}