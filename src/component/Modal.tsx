// Modal.tsx
import React from 'react';
import './Modal.css'; // Import your CSS for styling

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    image?: string; // Optional if you don't always pass an image
    description?: string; // Optional if you don't always pass a description
      // To allow passing children elements
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image, description  }) => {
    if (!isOpen) return null; // Don't render anything if the modal is not open

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {image && <img src={image} alt="Certificate" />} {/* Render image if provided */}
                {description && <p>{description}</p>} {/* Render description if provided */}
                 
            </div>
        </div>
    );
};

export default Modal;