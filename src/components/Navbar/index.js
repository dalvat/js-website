import React from "react";
import NavLinks from '../NavLinks'
import './style.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbrand">
        <h2 className="navtitle"><NavLinks to='/' name="Jonny Steinberg"/></h2>
      </div>
      <div className="linksdiv">
        <ul className="navlinks">
          <NavLinks to="/events" name="Events" />
          <NavLinks to="/books" name="Books" />
          <NavLinks to="/journalism" name="Journalism" />
          <NavLinks to="/about" name="About Jonny" />
          <NavLinks to="/contact" name="Contact" />
        </ul>
      </div>
    </div>
  )
}