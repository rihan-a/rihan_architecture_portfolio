import React, { useState, useEffect } from "react";
import "./GenAi.css";
import NavBar from "../NavBar/NavBar";

function GenAi() {
    const [prompt, setPrompt] = useState("");
    const [outputUrl, setOutputUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [gallery, setGallery] = useState<any[]>([]);
    const [galleryLoading, setGalleryLoading] = useState(true);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}/gallery`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch gallery items");
                }
                const data = await response.json();
                setGallery(data);
            } catch (err) {
                console.error(err);
            } finally {
                setGalleryLoading(false);
            }
        };

        fetchGallery();
    }, []);

    const generateDesign = async () => {
        setLoading(true);
        setError("");
        setOutputUrl(null);

        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/generate`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to generate design");
            }

            const data = await response.json();

            // Ensure data.outputUrl is a valid string
            if (typeof data.outputUrl === "string") {
                setOutputUrl(data.outputUrl);
            } else {
                throw new Error(
                    "Invalid response format: outputUrl is not a string"
                );
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const downloadDesign = () => {
        if (outputUrl) {
            const link = document.createElement("a");
            link.href = outputUrl;
            link.download = "design.jpg"; // Default filename for download
            link.click();
        }
    };

    return (
        <div className="idg-main">
            <NavBar />
            <div className="idg-container">
                <h1 className="idg-title">GenAi - Interior Design</h1>

                <textarea
                    className="idg-input"
                    value={prompt}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setPrompt(e.target.value)
                    }
                    placeholder="Enter your design idea..."
                    disabled={loading}
                    autoCorrect="on"
                    autoComplete="on"
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
                        <button
                            onClick={downloadDesign}
                            className="idg-download-button"
                        >
                            Download Design
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GenAi;
