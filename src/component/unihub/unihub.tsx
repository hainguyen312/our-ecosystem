import React from "react";
import './unihub.scss';
import Slider from "./slider";

export default function UniHub(){
    return(
        <div className="unihub-container">
        <h3 className="unihub-heading">UNIHUB ECOSYSTEM</h3>
        <div className="unihub-desc">UniHUB Ecosystem is a comprehensive startup support ecosystem that helps
            incubate and support Start-ups and SMEs in the early stages.</div>
        <Slider/>

        </div>
    )
}

