// PROJECT CARD
// Component to render project img and title as a card in Project Gallery

import React, { useState, useRef, useEffect } from "react";
import "./ProjectCard.css";
import { useNavigate } from "react-router-dom";

// Props types interface
interface IProps {
    coverImg: string;
    title: string;
    id: number;
}

const ProjectCard = React.memo(({ coverImg, title, id }: IProps) => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [imageError, setImageError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '100px',
                threshold: 0.1
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Load image when in view
    useEffect(() => {
        if (isInView && imgRef.current) {
            imgRef.current.src = coverImg;
        }
    }, [isInView, coverImg]);

    // function to open clicked project page
    const openProject = () => {
        navigate(`/project/${id}`);
    };

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div className="project-card-container" onClick={openProject} ref={cardRef}>
            <div className="project-card-img">
                {!isInView ? (
                    // Loading skeleton - show until component comes into view
                    <div className="image-skeleton"></div>
                ) : imageError ? (
                    // Error state
                    <div className="image-error">
                        <span>Image not available</span>
                    </div>
                ) : (
                    <img 
                        ref={imgRef}
                        alt={`${title} project`} 
                        loading="lazy"
                        onLoad={handleImageLoad}
                        onError={handleImageError}
                        className={isLoaded ? 'loaded' : 'loading'}
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out'
                        }}
                    />
                )}
            </div>
            <div className="project-title">
                <h4>{title}</h4>
            </div>
        </div>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
