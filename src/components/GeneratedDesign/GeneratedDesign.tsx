// components/GeneratedDesign.tsx
import React from "react";

interface GeneratedDesignProps {
    outputUrl: string;
}

const GeneratedDesign: React.FC<GeneratedDesignProps> = ({ outputUrl }) => {
    const downloadDesign = () => {
        const link = document.createElement("a");
        link.href = outputUrl;
        link.download = "rihan_design_generator.jpg";
        link.click();
    };

    return (
        <div className="generated-design-container">
            <h2 className="idg-subtitle">Generated Design:</h2>
            <img src={outputUrl} alt="Generated Design" className="idg-image" />
            <button onClick={downloadDesign} className="idg-download-button">
                Download Design
            </button>
        </div>
    );
};

export default GeneratedDesign;
