import React from "react";
import { format } from "date-fns";

interface ImageModalProps {
    selectedImage: any;
    modalImage?: string;
    setModalImage: (url?: string) => void;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
    selectedImage,
    modalImage,
    setModalImage,
    onClose,
}) => {
    const closeImageModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).classList.contains("idg-modal")) {
            onClose();
        }
    };

    return (
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

                <p className="idg-modal-caption">{selectedImage.prompt}</p>

                {selectedImage.originalImage && (
                    <div className="before-after-container">
                        <button
                            className={`before-btn bfaf-btn ${
                                modalImage === selectedImage.originalImage
                                    ? "bfaf-active"
                                    : " "
                            }`}
                            onClick={() =>
                                setModalImage(selectedImage.originalImage)
                            }
                        >
                            Before
                        </button>
                        <button
                            className={`mask-btn bfaf-btn ${
                                modalImage === selectedImage.maskImage
                                    ? "bfaf-active"
                                    : " "
                            }`}
                            onClick={() =>
                                setModalImage(selectedImage.maskImage)
                            }
                        >
                            Mask
                        </button>
                        <button
                            className={`after-btn bfaf-btn ${
                                modalImage === selectedImage.imageUrl
                                    ? "bfaf-active"
                                    : " "
                            }`}
                            onClick={() =>
                                setModalImage(selectedImage.imageUrl)
                            }
                        >
                            After
                        </button>
                    </div>
                )}

                <button className="idg-close-button" onClick={onClose}>
                    X
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
