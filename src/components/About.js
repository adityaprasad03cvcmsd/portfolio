import React from "react";
import "./About.css";
import "../App.css";
import { Div } from "../elements/Div";
import mypic from "../images/mypic.png"


export const About=()=>{
   

    return (
        <Div>
            <div className="container" id="About">
                <div className="row">
                    <div className="col__2">
                        <img className="about_img" src={mypic}/>
                    </div>
                    <div className="col__2">
                        <h1 className="aboutMe">About Me</h1>
                        <p className="p__color about_detail centering">
                            Hi, my name is Aditya Prasad. My passion is my work that I put in day in and day out.My love for coding can be seen in my projects.
                        </p>
                        <p className="p__color about_detail">
                            I am a FULL-STACK web developer with specalization in MERN stack. I have worked on fronend and backend in my projects.
                        </p>
                        <p className="p__color about_detail">
                            I have 1 & 1/2 years of work experience in two aditional domains that is Facilty Management and Hotel Management.
                        </p>
                        <div className="aboutButton d__flex align__items__center">
                            < a href = "https://drive.google.com/file/d/1mHGTVzrQIoQd27DbvBmQBTtZKEtTcm94/view?usp=sharing" target={"_blank"}> < button className = "about_btn" > Download Resume </button></a >
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}