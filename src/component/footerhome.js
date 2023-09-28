import React from "react";
import "./footerhome.css"
function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2023 store management</p>
                <nav>
                    <ul className="horizontal-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
