import React, { useState }  from "react";
import "./WorkCard.css";
import Project1 from "../img/project1.png";
import { NavLink } from "react-router-dom";
import ModalBox from "./ModalBox";
 
 
// const projectname =[
//    'demo','demo2'
// ];
// const projectImages = [Project1,Project1,Project1,Project1,Project1,Project1,Project1,Project1,Project1];

const projectImages = [
    { src: Project1, title: 'Company Website' },
    { src: Project1, title: 'E-Commerce Platform' },
    { src: Project1, title: 'Portfolio Website' },
    { src: Project1, title: 'Company Website' },
    { src: Project1, title: 'E-Commerce Platform' },
    { src: Project1, title: 'Portfolio Website' },
    { src: Project1, title: 'Company Website' },
    { src: Project1, title: 'E-Commerce Platform' },
    { src: Project1, title: 'Portfolio Website' },
  ];


const WorkCard: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
    <div className="work-container"> 
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">

        <div className="project-card">
                <img src={Project1} alt="Project 1 thumbnail" />
                    <h2 className="project-title">Scube</h2>
                    <div className="pro-details">
                        <p> This project frontend technologies for user experience and CodeIgniter 3 for backend processing, making it robust, secure, and efficient.</p>
                        <div className="pro-btns">
                                <NavLink to="https://s3dist.in/" target="_blank"className="btn">
                                    View
                                </NavLink>
                                <NavLink to="#" className="btn">
                                Source
                                </NavLink>
                        </div>
                    </div>
            </div>

            <div className="project-card">
            <img src={Project1} alt="Project 1 thumbnail" />
                <h2 className="project-title">Company Website</h2>
                {/*<h3 className="project-date">Sep 2024</h3>*/}
                <div className="pro-details">
                <p> This project frontend technologies for user experience and CodeIgniter 4 for backend processing, making it robust, secure, and efficient.</p>
                        <div className="pro-btns">
                            {/* <NavLink to="/viewdetail" className="btn">
                                View
                            </NavLink> */}
                            <button onClick={() => setIsModalOpen(true)} className="btn">
                                        View Images
                                    </button>
                                    <ModalBox
                                            isOpen={isModalOpen}
                                            onClose={() => setIsModalOpen(false)}
                                            // titles={projectname}
                                            images={projectImages}
                                            
                                        />
                            <NavLink to="url.com" className="btn">
                               Source
                            </NavLink>

                      </div>
                </div>

            </div>

            <div className="project-card">
                <img src={Project1} alt="Project 1 thumbnail" />
                    <h2 className="project-title">Covid 19 Testing Managment</h2>
                    <div className="pro-details">
                        <p> This Is text</p>
                        <div className="pro-btns">
                                {/* <NavLink to="url.com" className="btn">
                                    View
                                </NavLink> */}
                                <button onClick={() => setIsModalOpen(true)} className="btn">
                                        View Images
                                    </button>
                                <NavLink to="url.com" className="btn">
                                Source
                                </NavLink>
                        </div>
                    </div>
            </div>


            <div className="project-card">
                <img src={Project1} alt="Project 1 thumbnail" />
                    <h2 className="project-title">Gym Management System</h2>
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
                    <h2 className="project-title">Car Washing System</h2>
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
