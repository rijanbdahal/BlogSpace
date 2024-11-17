import React from "react";
import logo from "../logo.png";
import '../App.css';
const Header: React.FC = ()=>{
    return(
        <header className="header">
            <div className="logo">
                <a href="/">
                <img src={logo} alt="Logo" className="App-logo"/>
                </a>
            </div>
            <nav>
                <a href="/">Home </a>
                <a href="/blogs">Posts</a>
                <a href="/contactus">Contact Us</a>
                <a href="/newsletter">News Letter</a>
            </nav>
        </header>
    );
};

export default Header;
