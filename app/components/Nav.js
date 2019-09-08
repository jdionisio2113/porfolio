import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className="nav-list">
            <li>
                <Link to="/">
                    <i className="fa fa-home fa-2x"></i>
                    <p className="home-link">Home</p>
                </Link>
            </li>
            <li>
                <Link to="/about">
                    <i className="fa fa-user fa-2x"></i>
                    <p className="about-link">About</p>
                </Link>
            </li>
            <li>
                <Link className="work" to="/projects">
                    <i className="fa fa-folder-open fa-2x"></i>
                    <p className="work-link">Projects</p>
                </Link>
            </li>
            <li>
                <Link className="contact" to="/projects">
                    <i className="fa fa-inbox fa-2x"></i>
                    <p className="contact-link">Contact</p>
                </Link>
            </li>
        </ul>

    )
}

export default Nav