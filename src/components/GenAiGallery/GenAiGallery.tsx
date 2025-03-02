import React from "react";

interface GalleryProps {
    gallery: any[];
    loading: boolean;
    onImageClick: (item: any) => void;
}

const GenAiGallery: React.FC<GalleryProps> = ({
    gallery,
    loading,
    onImageClick,
}) => {
    return (
        <div className="idg-gallery">
            {loading
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
                          onClick={() => onImageClick(item)}
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
    );
};

export default GenAiGallery;
