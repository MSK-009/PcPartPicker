import React from 'react'
import { useState, useEffect } from 'react';
import logo from "/logo.png"
import {
    Link
  } from "react-router-dom";
  import Search from './Search';
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = ({openWindow, updateContent}) => {
    return (
        <div style={{zIndex:'0'}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top bg-opacity-75" style={{borderBottom:"2px solid green", WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', zIndex:'10'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/"><img style={{marginLeft: "30px",height: "40px"}} src={logo} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "><RxHamburgerMenu /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <button className="btn btn-success btn-md text-light" onClick={() => { openWindow(); updateContent(); }}>Customize!</button>
                        </li>
                        <li className="nav-item dropdown mx-5">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Parts
                            </Link>
                            <ul className="dropdown-menu bg-success">
                                <li><Link className="dropdown-item" to="/processors">Processor</Link></li>
                                <li><Link className="dropdown-item" to="/gpu">Graphics Card</Link></li>
                                <li><Link className="dropdown-item" to="/motherboard">Motherboard</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/memory">RAM</Link></li>
                                <li><Link className="dropdown-item" to="/storage">Storage</Link></li>
                                <li><Link className="dropdown-item" to="/cases">Case</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/psu">Power Supply Unit</Link></li>

                            </ul>
                        </li>
                    </ul>
                <Search/>
                    
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar