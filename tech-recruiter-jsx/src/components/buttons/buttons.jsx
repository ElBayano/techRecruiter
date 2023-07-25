import React from "react";
import "./button.css"

export default function Button({className, children}) {
    return (<button className={className}>
        {children}
    </button>)
}