import "./Ai.css";
import aiImages from "../../ai-images.json";
import { useState, useEffect } from "react";

// Skeleton Components
const TitleSkeleton = () => (
    <section className="ai-page-main-title">
        <div className="skeleton-title"></div>
    </section>
);

const DescriptionSkeleton = ({ title, description }: { title: string; description: string }) => (
    <>
        <div className="sketch-txt-cover">
            <div className="skeleton-subtitle"></div>
            <div className="skeleton-description"></div>
        </div>
        <section className="ai-cover-container">
            <div className="skeleton-image"></div>
        </section>
    </>
);

const GallerySkeleton = () => (
    <section className="ai-gallery">
        {Array(8).fill(0).map((_, index) => (
            <div key={index} className="skeleton-gallery-image"></div>
        ))}
    </section>
);

function Ai() {
    const [loading, setLoading] = useState(true);
    const [shuffledImages, setShuffledImages] = useState<string[]>([]);

    useEffect(() => {
        // Simulate loading time to demonstrate skeleton
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Optimized random sorting - only runs once on component mount
        const shuffled = [...aiImages[0].aiImages].sort(() => 0.5 - Math.random());
        setShuffledImages(shuffled);
    }, []);

    if (loading) {
        return (
            <>
                <TitleSkeleton />
                <DescriptionSkeleton 
                    title="SKETCH2IMG Ai Model" 
                    description="Simple sketch as an input plus a text prompt, using Stable Diffuison Ai + ComfyUi + ControlNet"
                />
                <DescriptionSkeleton 
                    title="IMG2IMG Ai Model" 
                    description="Image as an input plus a text prompt, using Stable Diffuison Ai + ComfyUi + ControlNet"
                />
                <DescriptionSkeleton 
                    title="TXT2IMG Ai Model" 
                    description="Promt as an input, using my custom trained Model (LoRa) - Stable Diffuison Ai + ComfyUi"
                />
                <GallerySkeleton />
            </>
        );
    }

    return (
        <>
            <section className="ai-page-main-title">
                <h2>Generative Ai Experiments in Architecture</h2>
            </section>

            <div className="sketch-txt-cover">
                <h3 className="txt-cover-title">SKETCH2IMG Ai Model</h3>
                <h3 className="txt-cover-desc">
                    Simple sketch as an input plus a text prompt, using Stable
                    Diffuison Ai + ComfyUi + ControlNet
                </h3>
            </div>

            <section className="ai-cover-container">
                <img src="/images/sketch2img01.webp" alt="sketch2img ai" />
            </section>

            <div className="sketch-txt-cover">
                <h3 className="txt-cover-title">IMG2IMG Ai Model</h3>
                <h3 className="txt-cover-desc">
                    Image as an input plus a text prompt, using Stable Diffuison
                    Ai + ComfyUi + ControlNet
                </h3>
            </div>

            <section className="ai-cover-container img2img">
                <img src="/images/img2img.webp" alt="img2img ai" />
            </section>

            <div className="sketch-txt-cover">
                <h3 className="txt-cover-title">TXT2IMG Ai Model</h3>
                <h3 className="txt-cover-desc">
                    Promt as an input, using my custom trained Model (LoRa) - Stable
                    Diffuison Ai + ComfyUi
                </h3>
            </div>

            <section className="ai-gallery">
                {shuffledImages.map((img: string) => {
                    return (
                        <img
                            className="gallery-ai-img"
                            src={img}
                            alt="ai generated building"
                            key={img}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default Ai;
