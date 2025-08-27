import React, { useState, useRef, useEffect } from "react";

interface GalleryProps {
    gallery: any[];
    loading: boolean;
    onImageClick: (item: any) => void;
}

interface GalleryItemProps {
    item: any;
    index: number;
    total: number;
    onImageClick: (item: any) => void;
}

// Individual gallery item component with lazy loading
const GalleryItem = React.memo(({ item, index, total, onImageClick }: GalleryItemProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [imageError, setImageError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);
    const itemRef = useRef<HTMLDivElement>(null);

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
                rootMargin: '100px', // Start loading 100px before the image comes into view
                threshold: 0.1
            }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Load image when in view
    useEffect(() => {
        if (isInView && imgRef.current) {
            imgRef.current.src = item.imageUrl;
        }
    }, [isInView, item.imageUrl]);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div
            className="idg-gallery-item"
            onClick={() => onImageClick(item)}
            ref={itemRef}
        >
            <span className="img-number">
                #{total - index}
            </span>
            {!isInView ? (
                // Loading skeleton
                <div className="idg-gallery-skeleton"></div>
            ) : imageError ? (
                // Error state
                <div className="idg-gallery-error">
                    <span>Image not available</span>
                </div>
            ) : (
                <img
                    ref={imgRef}
                    alt="Gallery Item"
                    className={`idg-gallery-image ${isLoaded ? 'loaded' : 'loading'}`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{
                        opacity: isLoaded ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                />
            )}
        </div>
    );
});

GalleryItem.displayName = 'GalleryItem';

const GenAiGallery: React.FC<GalleryProps> = React.memo(({
    gallery,
    loading,
    onImageClick,
}) => {
    if (loading) {
        return (
            <div className="idg-gallery">
                {Array(6)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="idg-gallery-skeleton"
                        ></div>
                    ))}
            </div>
        );
    }

    return (
        <div className="idg-gallery">
            {gallery.map((item, index) => (
                <GalleryItem
                    key={index}
                    item={item}
                    index={index}
                    total={gallery.length}
                    onImageClick={onImageClick}
                />
            ))}
        </div>
    );
});

GenAiGallery.displayName = 'GenAiGallery';

export default GenAiGallery;
