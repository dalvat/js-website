import React from "react";
import NavLinks from '../NavLinks'
import './style.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbrand">
        <h2 className="navtitle"><NavLinks to='/js-website' name="Jonny Steinberg"/></h2>
      </div>
      <div className="linksdiv">
        <ul className="navlinks">
          <NavLinks to="/js-website/events" name="Events" />
          <NavLinks to="/js-website/books" name="Books" />
          <NavLinks to="/js-website/journalism" name="Journalism" />
          <NavLinks to="/js-website/about" name="About Jonny" />
          <NavLinks to="/js-website/contact" name="Contact" />
        </ul>
      </div>
    </div>
  )
}