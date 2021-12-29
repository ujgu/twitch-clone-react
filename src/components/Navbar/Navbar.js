/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { SiTwitch } from "react-icons/si";
import { FiMoreVertical, FiUser } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { CgCrown } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="navbar">
        
      <div className="logo">
        <IconContext.Provider value={{ color: "#a970ff", className: "logoSets" }}>
          <SiTwitch/>
        </IconContext.Provider>
      </div>
        <div className="explore">
            <a href="#" className="exploreSets">Gözat</a>
        </div>
        <div className="more">
            <IconContext.Provider value={{ color: "#fff", className: "moreSets" }}>
                <FiMoreVertical />
            </IconContext.Provider>
        </div>
        <div className="search">
          <input type="text" placeholder="Ara" className="searchBox" />
          <button className="searchButton">
            <IconContext.Provider value={{ color: "#fff", className: "searchIcon" }}>
                <BiSearch />
            </IconContext.Provider>
            </button>
        </div>
        <div className="crown">
            <IconContext.Provider value={{ color: "#fff", className: "crownSets" }}>
                <CgCrown />
            </IconContext.Provider>
        </div>
       <button className="loginButton">Oturum Aç</button>
       <button className="signupButton">Kayıt ol</button>
       <div className="user">
            <IconContext.Provider value={{ color: "#fff", className: "userSets" }}>
                <FiUser />
            </IconContext.Provider>
            </div>
    </nav>
  );
}

export default Navbar;
