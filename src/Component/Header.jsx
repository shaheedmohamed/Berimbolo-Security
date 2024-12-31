// components/Header.js
import React from "react";

const Header = () => {
    return (
        <header>
            <h2 className="logo fw-bold "> Security</h2>
            <nav>
                <ul className="nav">
                    <li>
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <button>Sign Up</button>
        </header>
    );
};

export default Header;
