import React from 'react'
import { Link } from 'react-router-dom'
import logo from "/logoFooter.png"
const Footer = () => {
    return (

        <footer className="text-center text-lg-start text-muted bg-success-subtle text-success-emphasis rounded bottom-0 sticky-footer">
            <section className="my-5 py-5">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                            <img src={logo} style={{height:"50px", filter:"invert(1)", marginRight:"10px"}} alt="" /> Pc Parts Picker
                            </h6>
                            <div>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fab fa-google"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fab fa-linkedin"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                            <br />
                            <p>
                                Dive into the world of custom PCs and unleash your creativity. <br />
                                Whether you're a first-time builder or a seasoned pro, we’ve got you covered!
                            </p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Parts
                            </h6>
                            <p>
                                <Link to="/processors" className="text-reset">Processor</Link>
                            </p>
                            <p>
                                <Link to="/gpu" className="text-reset">Graphics Card</Link>
                            </p>
                            <p>
                                <Link to="/motherboard" className="text-reset">Motherboard</Link>
                            </p>
                            <p>
                                <Link to="/memory" className="text-reset">RAM</Link>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-5">
                            </h6>
                            <p>
                                <Link to="/storage" className="text-reset">Storage</Link>
                            </p>
                            <p>
                                <Link to="/cases" className="text-reset">PC Case</Link>
                            </p>
                            <p>
                                <Link to="/psu" className="text-reset">Power Supply Unit</Link>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> NED University of Engineering and Technology, Karachi, Pakistan</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                <a href='mailto:luxumen03@gmail.com' className='text-primary-emphasis'>neduniversity@email.com</a>
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
                © 2024 All Rights Reserved <span className='text-reset fw-bold'>PcPartsPicker™</span> <br />
                <Link className="text-reset fw-bold" to="https://github.com/MSK-009/PcPartPicker" target='_blank'><i className="bi bi-github"></i> Visit Github</Link>
            </div>

        </footer>
    )
}

export default Footer
