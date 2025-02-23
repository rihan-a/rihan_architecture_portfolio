import React from "react";
import "./PromptStructure.css";

const PromptStructure = () => {
    return (
        <div className="prompt-guide">
            <div className="prompt-guide__title">Perfect Prompt Structure:</div>

            <div className="prompt-guide__structure">
                <span className="prompt-guide__element">Style</span>
                <span className="prompt-guide__operator">+</span>
                <span className="prompt-guide__element">Room Type</span>
                <span className="prompt-guide__operator">+</span>
                <span className="prompt-guide__element">Key Features</span>
                <span className="prompt-guide__operator">+</span>
                <span className="prompt-guide__element">Materials/Colors</span>
                <span className="prompt-guide__operator">+</span>
                <span className="prompt-guide__element">Lighting</span>
            </div>

            <div className="prompt-guide__example">
                Example: "Modern living room with floor-to-ceiling windows,
                modern modular cobalt blue sofa, warm oak floors, and natural
                daylight"
            </div>
        </div>
    );
};

export default PromptStructure;
