import React from "react";
import MouseIcon from "../MouseIcon/MouseIcon";

function Cover() {
    return (
        <div className="cover-wrapper">
            <div className="cover">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="mouse-icon-row">
                <MouseIcon />
            </div>
        </div>
    );
}

export default Cover;
