import React, { useState, useEffect } from "react";
import "./GenAi.css";
import NavBar from "../NavBar/NavBar";
import { format } from "date-fns";
import PromptStructure from "../PromptStructure/PromptStructure";

function GenAi() {
    const [prompt, setPrompt] = useState("");
    const [outputUrl, setOutputUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [gallery, setGallery] = useState<any[]>([]);
    const [selectedImage, setSelectedImage] = useState<any | null>(null);
    const [galleryLoading, setGalleryLoading] = useState(true);
    const [modalImage, setModalImage] = useState<string | undefined>(undefined);

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
            if (typeof data.outputUrl === "string") {
                setOutputUrl(data.outputUrl);
                setGallery((prev) => [
                    { prompt, imageUrl: data.outputUrl },
                    ...prev,
                ]);
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
            link.download = "rihan_design_generator.jpg";
            link.click();
        }
    };

    const handleImageClick = (item: any) => {
        setSelectedImage(item);
        setModalImage(undefined);
    };

    const closeImageModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains("idg-modal")) {
            setSelectedImage(null);
        }
    };

    return (
        <div className="idg-main">
            <NavBar />
            <div className="idg-container">
                <h1 className="idg-title">
                    GenSpace AI – Your AI-Powered Interior Design Assistant!
                </h1>

                <textarea
                    className="idg-input"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
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
                    {loading ? (
                        <div className="spinner"></div>
                    ) : (
                        "Generate Design"
                    )}
                </button>

                {error && <p className="idg-error">{error}</p>}

                <PromptStructure />

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

                <h2 className="idg-gallery-title">User Gallery</h2>
                <div className="idg-gallery">
                    {galleryLoading
                        ? Array(6)
                              .fill(0)
                              .map((_, index) => (
                                  <div
                                      key={index}
                                      className="idg-gallery-skeleton"
                                  ></div>
                              ))
                        : gallery.map((item, index) => (
                              <div
                                  key={index}
                                  className="idg-gallery-item"
                                  onClick={() => handleImageClick(item)}
                              >
                                  <span className="img-number">
                                      #{gallery.length - index}
                                  </span>
                                  <img
                                      src={item.imageUrl}
                                      alt="Gallery Item"
                                      className="idg-gallery-image"
                                  />
                              </div>
                          ))}
                </div>

                {selectedImage && (
                    <div className="idg-modal" onClick={closeImageModal}>
                        <div className="idg-modal-content">
                            <span className="modal-date">
                                {format(
                                    new Date(selectedImage.createdAt),
                                    "dd-MM-yyyy 'at' hh:mm a"
                                )}
                            </span>
                            <img
                                src={modalImage ?? selectedImage.imageUrl}
                                alt="ai generated"
                                className="idg-modal-image"
                            />

                            <p className="idg-modal-caption">
                                {selectedImage.prompt}
                            </p>

                            {selectedImage.originalImage && (
                                <div className="before-after-container">
                                    <button
                                        className={`before-btn  bfaf-btn ${
                                            modalImage ===
                                            selectedImage.originalImage
                                                ? "bfaf-active"
                                                : " "
                                        }`}
                                        onClick={() =>
                                            setModalImage(
                                                selectedImage.originalImage
                                            )
                                        }
                                    >
                                        Before
                                    </button>
                                    <button
                                        className={`mask-btn  bfaf-btn ${
                                            modalImage ===
                                            selectedImage.maskImage
                                                ? "bfaf-active"
                                                : " "
                                        }`}
                                        onClick={() =>
                                            setModalImage(
                                                selectedImage.maskImage
                                            )
                                        }
                                    >
                                        Mask
                                    </button>
                                    <button
                                        className={`after-btn  bfaf-btn ${
                                            modalImage ===
                                            selectedImage.imageUrl
                                                ? "bfaf-active"
                                                : " "
                                        }`}
                                        onClick={() =>
                                            setModalImage(
                                                selectedImage.imageUrl
                                            )
                                        }
                                    >
                                        After
                                    </button>
                                </div>
                            )}

                            <button
                                className="idg-close-button"
                                onClick={() => setSelectedImage(null)}
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GenAi;
