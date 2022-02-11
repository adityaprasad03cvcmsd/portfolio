import React from "react";
import "./About.css";
import { Div } from "../elements/Div";
import mypic from "../images/mypic.png"

export const About=()=>{
    return (
        <Div>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img className="about_img" src={mypic}/>
                    </div>
                    <div className="col__2">
                        <h1 className="aboutMe">About Me</h1>
                        <p className="p__color about_detail">
                            hello, my name is Aditya Prasad.I am a Masters and BTech graduate.I am currently pursuing full - Stack web development program at Masai.I have work experience of 1½ years.Currently, I am looking
                            for a job in IT sectors which can challenge me broden my horizons.
                        </p>
                    </div>
                </div>
            </div>
        </Div>
    )
}