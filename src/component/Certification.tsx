import React, { useState } from 'react';
import "./Certification.css";
import Modal from './Modal';
import ACADMIC1 from '../img/academic1.jpeg';
 


const Certification: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ image: string; description: string }>({ image: '', description: '' });


    const certificates = [
        {
            id: 1,
            image: ACADMIC1,
            description: 'Description of Academic Certificate 1 Description of Academic Certificate 1 Description of Academic Certificate 1 Description of Academic Certificate 1 Description of Academic Certificate 1Description of Academic Certificate 1',
        },
        {
            id: 2,
            image: 'path/to/your/second/certificate.jpg',
            description: 'Description of Academic Certificate 2',
        },
        // Add more certificates as needed
    ];

    const handleViewClick = (image: string, description: string) => {
        setModalContent({ image, description });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="my-certification">
           <h1>My Certification</h1>
            <div className="section-container">
                <div className="section-cer">
                    <h2>Academic</h2>
                    <div className="card-container">
                        {certificates.map((cert) => (
                            <div className="card-cer" key={cert.id}>
                                <img src={cert.image} alt={`Certificate ${cert.id}`} />
                                <p>{cert.description}</p>
                                <button 
                                    className="btn cer-btn" 
                                    onClick={() => handleViewClick(cert.image, cert.description)}
                                >
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                    <Modal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
                image={modalContent.image} 
                description={modalContent.description} 
            />
             <br /><br /><br />



                    <div className="card-container">
                        <div className="card-cer">
                        <img src={ACADMIC1} alt="Academic Certificate 1" />
                        <p>Description of Academic Certificate 1</p>
                        <button className="btn cer-btn">View</button>
                        </div>
                        <div className="card-cer">
                        <img src="academic2.jpg" alt="Academic Certificate 2" />
                        <p>Description of Academic Certificate 2</p>
                        <button className="btn cer-btn">View</button>
                        </div>
                        <div className="card-cer">
                        <img src="academic3.jpg" alt="Academic Certificate 3" />
                        <p>Description of Academic Certificate 3</p>
                        <button className="btn cer-btn">View</button>
                        </div>
                    </div>
                </div>

                <div className="section-cer">
                  <h2>Cources</h2>
                    <div className="card-container">
                        <div className="card-cer">
                        <img src="industry1.jpg" alt="Industry Certificate 1" />
                        <p>Description of Industry Certificate 1</p>
                        <button className="btn cer-btn">View</button>
                        </div>
                        <div className="card-cer">
                        <img src="industry2.jpg" alt="Industry Certificate 2" />
                        <p>Description of Industry Certificate 2</p>
                        <button className="btn cer-btn">View</button>
                        </div>
                        <div className="card-cer">
                        <img src="industry3.jpg" alt="Industry Certificate 3" />
                        <p>Description of Industry Certificate 3</p>
                        <button className="btn cer-btn">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;