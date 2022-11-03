import React from "react";
import { stack as Menu }  from "react-burger-menu";
import './MenuItems.css'


// export default props => {
class MenuItems extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu right>
                <a id="Home" className="menu-item" href="/">Home</a>
                <a id="About" className="menu-item" href="/about">About Me</a>
                <a id="Projects" className="menu-item" href="/projects">Projects</a>
                {/*<a id="Gallery" className="menu-item" href="/gallery">Gallery</a>*/}
                <a id="Contact" className="menu-item" href="/contact-me">Contact Me</a>
            </Menu>

        );
// };
    }
}

export default MenuItems;
