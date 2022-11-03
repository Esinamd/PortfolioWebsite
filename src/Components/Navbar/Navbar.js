import React, { Component } from "react";
// import {MenuItems} from "./MenuItems";
import './Navbar.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faPinterestP, faItchIo} from "@fortawesome/free-brands-svg-icons";



class Navbar extends Component {

    render(){
        return (
            <nav className="NavbarItems">
                <div className="homeIconBox">
                    <div className="homeIcon"><a href="https://instagram.com/blendrbabe" target="_blank"><FontAwesomeIcon icon={faInstagram} color="#e0e0e2" size="2x"/></a></div>
                    <div className="homeIcon"><a href="https://www.linkedin.com/in/esinamdake" target="_blank"><FontAwesomeIcon icon={faLinkedin} color="#e0e0e2" size="2x"/></a></div>
                    <div className="homeIcon"><a href="https://www.pinterest.co.uk/esinamdake/" target="_blank"><FontAwesomeIcon icon={faPinterestP} color="#e0e0e2" size="2x"/></a></div>
                    <div className="homeIcon"><a href="https://manise.itch.io/" target="_blank"><FontAwesomeIcon icon={faItchIo} color="#e0e0e2" size="2x"/></a></div>
                </div>
            </nav>
        )
    }
}

export default Navbar
