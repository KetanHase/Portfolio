import React from 'react';
import './ViewProject.css'; // Ensure your CSS styling is included
import ProjectImage from '../img/project1.png'; // Example image import

const ViewProject: React.FC = () => {
  return (
    <div className="view-project-container">
      <h1>Company Website</h1>
      <p>This page showcases the detailed view of the Company Website project.</p>

      <div className="project-image-container">
      <div className="image-item">
          <img src={ProjectImage} alt="Company Website" className="project-image" />
          <p>Home Page</p>
        </div>
        <div className="image-item">
          <img src={ProjectImage} alt="Company Website" className="project-image" />
          <p>About Us Page</p>
        </div>
        <div className="image-item">
          <img src={ProjectImage} alt="Company Website" className="project-image" />
          <p>Services Page</p>
        </div>
        <div className="image-item">
          <img src={ProjectImage} alt="Company Website" className="project-image" />
          <p>Contact Page</p>
        </div>
        <div className="image-item">
          <img src={ProjectImage} alt="Company Website" className="project-image" />
          <p>Blog Page</p>
        </div>
      </div>

      <a href="/" className="back-btn">Back to Projects</a>
    </div>
  );
};

export default ViewProject;
