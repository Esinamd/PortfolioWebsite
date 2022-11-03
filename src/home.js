import "./home.css";
import "./Pages/posts.css"
import Navbar from "./Components/Navbar/Navbar";
import React, { Component, useEffect, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import MenuItems from "./Components/Navbar/MenuItems";
import {Progress} from "./Components/progress";
import Latest from "./Components/latestPost";
import ShowComments from "./Components/showComments";

class Home extends Component {
    constructor() {
        super();
        this.vantaRef = React.createRef ();
    }

    componentDidMount() {
        this.vantaEffect = NET({
            el: this.vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 0.750,
            scaleMobile: 1.00,
            color: 0x3ce0b0,
            backgroundColor: 0xd3c4d1,
            points: 6.00,
            maxDistance: 24.00,
            spacing: 16.00
        })
    }

    componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
    }

    render() {
        return (
            <>
                <div class="homepage">
                <div className="home">
                    <div className="menu"><MenuItems pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} /></div>
                    <Navbar />
                </div>
                <div ref={this.vantaRef}>

                <div className="sectionAbout">
                    <div>
                        <h1 className="nameHome">Esinam<br/>Dake</h1>
                    </div>
                    <div>
                        <h2 className="infoBox about">MSci Computer Science Student</h2>
                    </div>
                    <div className="pageArrow">
                        <Progress />
                    </div>
                    </div>
                </div>

                <div className="sectionProj">
                    <h1 className="projHome"> Latest Project</h1>
                    <br/>
                    <br/>
                    <div className="tile">
                        <Latest />
                    </div>
                    <div className="moreProj">
                        <button className="infoBox more" onClick={event =>  window.location.href='/projects'} style={{cursor:"pointer", border: "none"}} >See More</button>
                    </div>
                </div>
                <div className="sectionGallery">
                    <h1 className="galHome">Quick Links!</h1>
                    <div style={{display: "none"}} className="moreGal">
                        <div><ShowComments /></div>
                    </div>
                    <div className="quickLinks">
                        {/* <h2>Quick Links</h2> */}
                        <h4> Here are some links for my projects</h4>
                        <iframe frameBorder="0"
                                src="https://itch.io/embed/910327?linkback=true&amp;border_width=5&amp;bg_color=81d2c7&amp;fg_color=7389ae&amp;link_color=7389ae&amp;border_color=7389ae"
                                width="560" height="175"><a href="https://manise.itch.io/athletics-platformer">Athletics
                            Platformer by Manise</a>
                        </iframe>
                    </div>
                </div>

                <div className="sectionFooter">

                </div>
            </div>
            </>
        )
    }
}

export default Home;



