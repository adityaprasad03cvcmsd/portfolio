import React from "react";
import "./Home.css";
import "../App.css";
import logo from "../images/logo.png";
import {SlideInLeft, SlideInRight, RotateCcw } from 'react-animated-components'

export const Home=()=>{
    return (
        <div className="home" id="Home">
            <div className="home__bg">
                <div className="header d__flex align__items__center pxy__30 navigation">
                    <div className="logo">
                        <RotateCcw durationMs={8000}>
                            <img src={logo} alt=""/>
                        </RotateCcw>                        
                    </div>
                    <div className="pxy__30">
                        <ul className="navbar d__flex">
                            <a href="#Home"><li className="nav__items mx__15">Home</li></a>
                            <a href="#About"><li className="nav__items mx__15">About</li></a>
                            <a href="#Skills"><li className="nav__items mx__15">Skills</li></a>
                            <a href="#Project"><li className="nav__items mx__15">Projects</li></a>
                            <a href="#Contact"><li className="nav__items mx__15">Contact</li></a>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="home_content">
                        <SlideInLeft durationMs={1000}>
                            <h1 className="home_line1 pz__10">Hi, I am Aditya Prasad</h1>
                        </SlideInLeft>
                        <SlideInRight durationMs={1000}>
                        < h3 className = "home_line2 pz__10" > Full-Stack Web Developer </h3>
                        </SlideInRight>
                    </div>
                </div>
            </div>
        </div>
    )
}