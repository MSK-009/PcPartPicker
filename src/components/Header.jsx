import React from 'react'
import { useState, useEffect, useContext } from 'react';
import logo from "/logo.png"
import {
    Link,
    useLocation
  } from "react-router-dom";
  
import { RxHamburgerMenu } from "react-icons/rx";
import ListContext from '../context/list/ListContext';

const Navbar = ({openWindow, updateContent}) => {
    const listContext = useContext(ListContext);
    const [items, setItems] = useState(listContext.selectedItem);

    useEffect(() => {
        setItems(listContext.selectedItem);
    }, [listContext]);

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
                            <Link className="btn btn-success btn-md text-light" to="/processors" >
                                Get Started&nbsp;&nbsp;
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
                                </svg>
                            </Link>
                        </li>
                        <li className="nav-item dropdown mx-5">
                            <Link className="nav-link dropdown-toggle shadow-none" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Parts
                            </Link>
                            
                            <ul className="dropdown-menu dropdown-menu-dark bg-success"> 
                                <li><Link className="dropdown-item" to="/processors">Processor</Link></li>
                                <li><Link className="dropdown-item" to="/gpu">Graphics Card</Link></li>
                                <li><Link className="dropdown-item" to="/motherboard">Motherboard</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/memory" ? 'active' : ""}`} to="/memory" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>RAM</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/storage" ? 'active' : ""}`} to="/storage" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Storage</Link></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/cases" ? 'active' : ""}`} to="/cases" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Case</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className={`dropdown-item ${location.pathname === "/psu" ? 'active' : ""}`} to="/psu" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' })}}>Power Supply Unit</Link></li>

                            </ul>
                        </li>
                        {(Object.keys(items).length === 7) && <li className="nav-item mx-5" >
                            <Link className={`btn btn-success btn-md text-light ${location.pathname === "/final" ? 'active' : ""}`} to="/final"><i class="bi bi-pc-display-horizontal h6 me-1"></i> Your Build </Link> 
                        </li>}
                        
                    </ul>
                    
                
                    
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar