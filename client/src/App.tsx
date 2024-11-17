import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './content/home';
import ContactUs from './content/contactus';
import Blogs from './content/blogs';
import NewsLetter from './content/newsletter';
import PrivacyPolicy from "./content/privacypolicy";
import TermsAndCondition from "./content/termsandcondition";
import Error from "./content/404";
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";


function App() {
  return (
      <Router>
      <div className="App">
        <Header/>
        <main className="content">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/contactus" element={<ContactUs/>}/>
                <Route path="/newsletter" element={<NewsLetter/>}/>
                <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
                <Route path="/termsandcondition" element={<TermsAndCondition/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>

        </main>
          <Footer/>
      </div>
      </Router>
  );
}

export default App;
