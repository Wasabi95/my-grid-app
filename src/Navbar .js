//import React from "react";
//import "./Navbar.css";
//import "./Navbar.scss";
// Use React Fragment instead of extra div elements:
//You can use React Fragment (<> or <React.Fragment>) to avoid adding unnecessary div elements in the DOM, making the code cleaner.

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <header className="navbar__header">
          <div className="navbar__logo">My Logo</div>
          <label htmlFor="navbar__toggle" className="navbar__toggle-label">
            Menu
          </label>
          <button
            id="navbar__toggle"
            className="navbar__toggle"
            aria-expanded="false"
            aria-controls="navbar__nav-links"
          >
            <span className="navbar__toggle-icon" aria-hidden="true"></span>
          </button>
        </header>
        <nav
          className="navbar__nav-links"
          id="navbar__nav-links"
          aria-label="Navigation Links"
        >
          <a href="#" className="navbar__nav-link">
            Home
          </a>
          <a href="#" className="navbar__nav-link">
            About
          </a>
          <a href="#" className="navbar__nav-link">
            Contact
          </a>
        </nav>
      </nav>
    </>
  );
};

export default Navbar;
