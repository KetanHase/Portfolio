import React from 'react';
import "./Expertise.css";
 

const Expertise: React.FC = () => {
  const skills = [
    { name: 'HTML5'},
    { name: 'CSS'},
    { name: 'JAVASCRIPT'},
    { name: 'PHP'},
    { name: 'SQL'},
    { name: 'REACTJS'},
    { name: 'REACTJS(TYPESCRIPT)'},
    { name: 'NODE JS'},
    { name: 'NODE JS'},
    { name: 'NODE JS'},
    { name: 'NODE JS'},
    { name: 'NODE JS'},
    { name: 'NODE JS'}
  ];
  const softskills = [
    { name: 'Time Management'},
    { name: 'Teamwork'},
    { name: 'Problem Solving'},
    { name: 'Leadership'},
    { name: 'Analytical Thinking'},
    { name: 'Adaptability'},
    { name: 'Communication'},
  ];
  const tools = [
    { name: 'Git'},
    { name: 'Git-Hub'},
    { name: 'Vs Code'}
  ];

  const languages = [
    { name: 'English', progress: 80 },
    { name: 'Hindi', progress: 90 },
    { name: 'Marathi', progress: 98 },
  ];

  return (
    <div className="resume">
      <h1>My Resume</h1>
      <div className="resume-sections">
        <div className="column">
          <div className="section">
            <h2>Expertise</h2>
            <div className="item">
              <h3>2024 - Present</h3>
              <h4>UX Developer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
            </div>
            <div className="item">
              <h3>2016 - 2017</h3>
              <h4>Front-end Developer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
            </div>
            <div className="item">
              <h3>2015 - 2016</h3>
              <h4>UX Designer</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
            </div>
          </div>
          <div className="section">
            <h2>Education</h2>
            <div className="item">
              <h3>2017 - Present</h3>
              <h4>B.E Computer Engineering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Error corrupti recusandae obcaecati odio repellat ducimus cum, minus tempora aperiam at.</p>
            </div>
            <div className="item">
              <h3>2016 - 2017</h3>
              <h4>Diploma in Computer Engineering</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.ips, eos, id officiis quas placet quia voluptas dolorem eum animi nostrum quae-aliquid repudiandae saepe!</p>
            </div>
            <div className="item">
              <h3>2015 - 2016</h3>
              <h4>High School Degree</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="section">
            <h2>Skills</h2> 
              <h2>Technical</h2>
              <div className="skill-section">
                
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <label htmlFor={`skill-${index}`}>{skill.name}</label>
                </div>
              ))}
            </div>
            <h2>Tools/Version control</h2>
            <div className="skill-section">
                
                {tools.map((tool, index) => (
                  <div className="skill" key={index}>
                    <label htmlFor={`tool-${index}`}>{tool.name}</label>
                </div>
              ))}
            </div>
            <h2>Soft skills</h2>
            <div className="skill-section">
                
                {softskills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <label htmlFor={`skill-${index}`}>{skill.name}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <h2>Languages</h2>
            {languages.map((language, index) => (
              <div className="language" key={index}>
                <label htmlFor={`progress-bar-${index}`}>{language.name}</label>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${language.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
