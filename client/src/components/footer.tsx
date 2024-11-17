import React from "react";
import '../App.css';
const Footer: React.FC= () =>{
    return(
      <footer className="footer">
          <nav>
              <a>&copy; {new Date().getFullYear()} BlogSpace. All Rights Reserved.</a>
              <a href="/termsandcondition">Terms and Condition</a>
              <a href="/privacypolicy">Privacy Policy</a>
          </nav>
      </footer>
    );
};

export default Footer;
