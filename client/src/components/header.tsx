import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import '../App.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <NavLink to="/">
                    <img src={logo} alt="BlogSpace Logo" className="App-logo" />
                </NavLink>
            </div>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""}>Posts</NavLink>
                <NavLink to="/contactus" className={({ isActive }) => isActive ? "active" : ""}>Contact Us</NavLink>
                <NavLink to="/newsletter" className={({ isActive }) => isActive ? "active" : ""}>News Letter</NavLink>
            </nav>
        </header>
    );
};

export default Header;
