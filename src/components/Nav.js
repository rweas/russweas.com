import React from 'react';
// import logo from './russweas.svg';
import logo from '../russweas.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import {faFilePdf, faTerminal} from "@fortawesome/free-solid-svg-icons";
function Nav() {
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} width={112} height={110} alt="asdf" />
                    Russell Weas
                </a>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                    <a className="navbar-item" href="/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFilePdf} size="2x" />
                        </a>
                        <a className="navbar-item" href="https://www.github.com/rweas"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a className="navbar-item" href="https://www.linkedin.com/in/rweas"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a className="navbar-item" href="https://notes.russweas.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTerminal} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;