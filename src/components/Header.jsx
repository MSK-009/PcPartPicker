import React from 'react'
import { useState, useEffect } from 'react';
import logo from "/logo.png"
import {
    Link,
    useLocation
  } from "react-router-dom";
  
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({openWindow, updateContent}) => {
    let location = useLocation()
    return (
        <div style={{zIndex:'0'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top bg-opacity-75" style={{borderBottom:"2px solid green", WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', zIndex:'10'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><img style={{marginLeft: "30px",height: "40px"}} src={logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-5">
                            <Link className={`nav-link ${location.pathname === "/" ? 'active' : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className={`nav-link ${location.pathname === "/about" ? 'active' : ""}`} to="/about">About us</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <button className="btn btn-success btn-md text-light" onClick={() => { openWindow(); updateContent(); }}>Customize!</button>
                        </li>
                        <li className="nav-item dropdown mx-5">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Parts
                            </Link>
                            <ul className="dropdown-menu bg-success">
                                <li><Link className={`dropdown-item ${location.pathname === "/processors" ? 'active' : ""}`} to="/processors" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Processor</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/gpu" ? 'active' : ""}`} to="/gpu" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Graphics Card</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/motherboard" ? 'active' : ""}`} to="/motherboard" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Motherboard</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/memory" ? 'active' : ""}`} to="/memory" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>RAM</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/storage" ? 'active' : ""}`} to="/storage" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Storage</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/cases" ? 'active' : ""}`} to="/cases" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Case</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/psu" ? 'active' : ""}`} to="/psu" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Power Supply Unit</Link></li>

                            </ul>
                        </li>
                    </ul>
                
                    
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar