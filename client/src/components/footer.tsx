import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <nav>
                <span>&copy; {new Date().getFullYear()} BlogSpace. All Rights Reserved.</span>
                <Link to="/termsandcondition" aria-label="View Terms and Conditions">Terms and Condition</Link>
                <Link to="/privacypolicy" aria-label="View Privacy Policy">Privacy Policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;
