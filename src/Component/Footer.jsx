// components/Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="d-flex justify-content-between">
            <p>© <span className="text-primary">Shaheed</span>  2025 </p>
            <ul>
                <li>
                    <a href="/terms">Terms of Service</a>
                </li>
                <li>
                    <a href="/privacy">Privacy Policy</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
