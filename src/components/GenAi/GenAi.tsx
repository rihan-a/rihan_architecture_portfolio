import React, { useState } from "react";
import "./GenAi.css";
import NavBar from "../NavBar/NavBar";

function GenAi() {
    const [prompt, setPrompt] = useState("");
    const [outputUrl, setOutputUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generateDesign = async () => {};

    return (
        <div className="idg-main">
            <NavBar />
            <div className="idg-container">
                <h1 className="idg-title">GenAi - Interior Design</h1>
                <input
                    type="text"
                    className="idg-input"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your design idea..."
                    disabled={loading}
                />
                <button
                    onClick={generateDesign}
                    className="idg-button"
                    disabled={loading || !prompt.trim()}
                >
                    {loading ? "Generating..." : "Generate Design"}
                </button>
                {error && <p className="idg-error">{error}</p>}
                {outputUrl && (
                    <div>
                        <h2 className="idg-subtitle">Generated Design:</h2>
                        <img
                            src={outputUrl}
                            alt="Generated Design"
                            className="idg-image"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GenAi;
