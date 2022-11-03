import React from "react";
import './about.css'
import MenuItems from "../Components/Navbar/MenuItems";
import Navbar from "../Components/Navbar/Navbar";

function About() {
        return (
            <>

            <div className="head">
                <a href="/"><h1 className="name">Esinam Dake</h1></a>
                <div className="menu"><MenuItems pageWrapId = {'page-wrap'} outerContainerId={'outer-container'} /></div>
            </div>
                <br/>
                <br/>
                <br/>
                <br/>
            <div className="main">
                <div className="left">
                    <h1 className="title">About Me</h1>
                    <div className="image" style={{display:"none"}}>
                        Image
                    </div>
                </div>
                <div className="right">
                    My name is Esinam and I am an aspiring developer based in London. I am currently an <b>Computer Science
                    MSci undergraduate student at Loughborough University</b> and I made this website to showcase the projects and
                    activities I have done and share what I have learnt. <br/> <br/>Some coding languages I have experience
                    with are <b>C/C++, C#, Python, Java and web programming languages HTML, CSS and JavaScript</b>. I also have
                    experience using <b>Unity Game Engine, Laravel and React</b> (with React being the framework I used to make
                    this website!). <br/><br/>I am open to collaborations and joint projects,
                    just contact me if you are interested!
                </div>
            </div>
            <div className="footer">
                <a className="contact" href="/contact-me">Contact Me!</a>
                <div className="bottomNav"><Navbar /></div>
            </div>
            </>
        );
}
export default About;
