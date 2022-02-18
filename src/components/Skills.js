import React from "react";
import "./About.css";
import "../App.css";
import { Div } from "../elements/Div";


export const Skill=()=>{
   

    return (
        <Div>
            <div className="container" id="Skills">
                <div className="row">
                    <div className="col__2">                        
                        <h1 className="skill">Skills</h1>
                        <div className="d__flex" id="skill_icon">
                            <div>
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqF8a9Ny_iAHbU8CFsPa4mprMDRdfiF2xpEw&usqp=CAU" alt="HTML"/>
                            </div>
                            <div>
                                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfAK_ihBQHi9vMHST90aZCS7xSF5VBywCbw&usqp=CAU" alt="CSS"/>
                            </div>
                            <div>
                                <img src = "https://pngset.com/images/library-of-javascript-icon-graphic-freeuse-files-logo-logo-javascript-icon-in-number-symbol-text-first-aid-transparent-png-1497709.png" alt="JavaScript"/>
                            </div>
                            <div>
                                <img src = "data:image/png;base64,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" alt="React"/>
                            </div>
                            <div>
                                <img src = "https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png" alt="Express"/>
                            </div>
                            <div>
                                <img src = "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png" alt="mongoDB"/>
                            </div>
                            <div>
                                <img src = "https://pngset.com/images/node-js-nodejs-number-symbol-text-recycling-symbol-transparent-png-1383018.png" alt="nodeJS"/>
                            </div>
                            <div>
                                <img src = "https://miro.medium.com/max/312/1*SRL22ADht1NU4LXUeU4YVg.png" alt="redux"/>
                            </div>
                            <div>
                                <img src = "https://www.pngrepo.com/png/331509/512/npm.png" alt="NPM"/>
                            </div>
                            <div>
                                <img src = "https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png" alt="C"/>
                            </div>
                            <div>
                                <img src = "https://juststickers.in/wp-content/uploads/2016/09/c-plus-plus.png" alt="C++"/>
                            </div>
                        </div>                        
                    </div>
                    <div className="col__2">
                        <div className="align__items__center skill_detail">                            
                            <p className="p__color about_detail centering">
                                =- Creating backend of application in Node and Express
                            </p>
                            <p className="p__color about_detail">
                                =- Creating frontend of application in HTML and React
                            </p>
                            <p className="p__color about_detail">
                                =- Knowledge of programming languages like JavaScript, C, C++;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}