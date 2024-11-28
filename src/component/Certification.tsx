import React from 'react';
import "./Certification.css";
import ACADMIC1 from '../img/academic1.jpeg';
 

const Certification: React.FC = () => {
    return (
        <div className="my-certification">
           <h1>My Certification</h1>
            <div className="section-container">
                <div className="section-cer">
                    <h2>Academic</h2>
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