import React from "react";
import { Button } from "./button.style";

export default function ButtonComponent({className, children}) {
    return (
    <Button >
        {children}
    </Button>)
}