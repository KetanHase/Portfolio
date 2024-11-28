import React  from "react";
import "./WorkCard.css";
import Project1 from "../img/project1.png";
import { NavLink } from "react-router-dom";
 

 
const WorkCard: React.FC = () => {
    
    return (
    <div className="work-container"> 
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
            <img src={Project1} alt="Project 1 thumbnail" />
                <h2 className="project-title">Project Title</h2>
                {/*<h3 className="project-date">Sep 2024</h3>*/}
                <div className="pro-details">
                    <p> This Is text</p>
                      <div className="pro-btns">
                            <NavLink to="url.com" className="btn">
                                View
                            </NavLink>
                            <NavLink to="url.com" className="btn">
                               Source
                            </NavLink>
                      </div>
                </div>

            </div>
            <div className="project-card">
            <img src={Project1} alt="Project 1 thumbnail" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p> This Is text</p>
                      <div className="pro-btns">
                            <NavLink to="url.com" className="btn">
                                View
                            </NavLink>
                            <NavLink to="url.com" className="btn">
                               Source
                            </NavLink>
                      </div>
                </div>

            </div>
            <div className="project-card">
            <img src={Project1} alt="Project 1 thumbnail" />
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p> This Is text</p>
                      <div className="pro-btns">
                            <NavLink to="url.com" className="btn">
                                View
                            </NavLink>
                            <NavLink to="url.com" className="btn">
                               Source
                            </NavLink>
                      </div>
                </div>

            </div>
            

        </div>
 
    </div>
    );
};

export default WorkCard;
