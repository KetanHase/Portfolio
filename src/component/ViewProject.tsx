import React from 'react';
import './ViewProject.css'; // Add your CSS styling here

const ViewProject: React.FC = () => {
  return (
    <div className="view-project-container">
      <h1>Company Website</h1>
      <p>This page showcases the detailed view of the Company Website project.</p>
      <a href="/" className="back-btn">Back to Projects</a>
    </div>
  );
};

export default ViewProject;
