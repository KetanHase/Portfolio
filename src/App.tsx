import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';
import About from './routes/About';
import ViewProject from './component/ViewProject';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/viewdetail" element={<ViewProject />} />
    </Routes>
  );
};

export default App;
