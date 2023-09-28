import React from "react";
import logo from "../assets/home.jpg"
import "./homecontainer.css";

function Container() {
    return (
        <div className="container">
            <div className="image">
                <img src={logo} alt="" />
            </div>
            <nav className="buttons">
                <button class="sign-in-button">Sign up</button>
                <button class="sign-up-button">Sign In</button>
            </nav>
        </div>
    );
}

export default Container;
