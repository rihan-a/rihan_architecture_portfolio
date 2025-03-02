// GenAi.tsx (Main Component)
import React, { useState, useEffect } from "react";
import "./GenAi.css";
import PromptStructure from "../../components/PromptStructure/PromptStructure";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import PromptInput from "../../components/PromptInput/PromptInput";
import GeneratedDesign from "../../components/GeneratedDesign/GeneratedDesign";
import GenAiGallery from "../../components/GenAiGallery/GenAiGallery";
import ImageModal from "../../components/ImageModal/ImageModal";

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
        fetchGallery();
    }, []);

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

    const generateDesign = async (promptText: string) => {
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
                    body: JSON.stringify({ prompt: promptText }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to generate design");
            }

            const data = await response.json();
            if (typeof data.outputUrl === "string") {
                setOutputUrl(data.outputUrl);
                setGallery((prev) => [
                    { prompt: promptText, imageUrl: data.outputUrl },
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

    const handleImageClick = (item: any) => {
        setSelectedImage(item);
        setModalImage(undefined);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="idg-main">
            <div className="idg-container">
                <h1 className="idg-title">
                    AI-Powered Interior Design Assistant
                </h1>

                <PromptInput
                    prompt={prompt}
                    setPrompt={setPrompt}
                    loading={loading}
                    onGenerate={() => generateDesign(prompt)}
                    error={error}
                    setError={setError}
                />

                <PromptStructure />

                {outputUrl && <GeneratedDesign outputUrl={outputUrl} />}

                <h2 className="idg-gallery-title">User Gallery</h2>
                <GenAiGallery
                    gallery={gallery}
                    loading={galleryLoading}
                    onImageClick={handleImageClick}
                />

                <ScrollToTopButton />

                {selectedImage && (
                    <ImageModal
                        selectedImage={selectedImage}
                        modalImage={modalImage}
                        setModalImage={setModalImage}
                        onClose={handleCloseModal}
                    />
                )}
            </div>
        </div>
    );
}

export default GenAi;
