import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    console.log(props)
    return (
        <div className="scroll">
            {props.children}
        </div>
    );
}

export default Scroll;   