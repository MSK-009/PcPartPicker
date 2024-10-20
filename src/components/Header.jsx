import React from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-opacity-25" style={{borderBottom:"2px solid green"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">PPP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-5">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link" to="/">About us</Link>
                        </li>
                        <li className="nav-item mx-5">
                            <Link className="nav-link" to="/">Contact us</Link>
                        </li>
                        <li className="nav-item dropdown mx-5">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Parts
                            </Link>
                            <ul className="dropdown-menu bg-success">
                                <li><Link className="dropdown-item" to="/">Processor</Link></li>
                                <li><Link className="dropdown-item" to="/">Graphics Card</Link></li>
                                <li><Link className="dropdown-item" to="/">Motherboard</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">RAM</Link></li>
                                <li><Link className="dropdown-item" to="/">Storage</Link></li>
                                <li><Link className="dropdown-item" to="/">Case</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/">Power Supply Unit</Link></li>

                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar