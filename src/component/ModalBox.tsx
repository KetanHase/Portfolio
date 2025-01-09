import React from 'react';
import './ModalBox.css'; // Add your CSS styling

interface ModalBoxProps {
  isOpen: boolean;
  onClose: () => void;
//   images: string[];
//   titles :string[];
images: { src: string; title: string }[];
}

const ModalBox: React.FC<ModalBoxProps> = ({ isOpen, onClose   ,images}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {/* <div className="image-gallery">
           {images.map((image, index) => (
            <img key={index} src={image} alt={`Project ${index + 1}`} className="modal-image" />
          ))}
            
          {titles.map((title, index) => (
            <p key={index} className="modal-title">
              {title}
            </p>
          ))}
         
        </div>  */}
        <div className="image-gallery">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.src} alt={`Project ${index + 1}`} className="modal-image" />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalBox;

