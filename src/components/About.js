import React from "react";
import "./About.css";
import "../App.css";
import { Div } from "../elements/Div";
import mypic from "../images/contact.png";
import { FadeIn, SlideInLeft, SlideInUp} from "react-animated-components";



export const About=()=>{
   

    return (
        <Div>
            <div className="container" id="About">
                <div className="row">
                    <div className="col__2">
                        <FadeIn durationMs={3000}>
                            <img className="about_img" src={mypic}/>
                        </FadeIn>
                    </div>
                    <div className="col__2">
                        <SlideInLeft durationMs={1000}> 
                            <h1 className="aboutMe">About Me</h1>
                        </SlideInLeft>
                        <SlideInUp durationMs={1000}>
                            <p className="p__color about_detail centering">
                                Hi, my name is Aditya Prasad. My passion is the work that I put in day in and day out. My love for coding can be seen in my projects.
                            </p>
                        </SlideInUp>
                        <SlideInUp durationMs={1000}>
                            <p className="p__color about_detail">
                                I am a FULL-STACK web developer with a specialization in the MERN stack. I have worked on the frontend and backend in my projects.
                            </p>
                        </SlideInUp>
                        <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                            I have 1 & 1/2 years of work experience in two additional domains that is Facility Management and Hotel Management.
                        </p>
                        </SlideInUp>
                        <div className="aboutButton d__flex align__items__center">
                            < a href = "https://drive.google.com/file/d/1mHGTVzrQIoQd27DbvBmQBTtZKEtTcm94/view?usp=sharing" target={"_blank"}> < button className = "about_btn" > Download Resume </button></a >
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}