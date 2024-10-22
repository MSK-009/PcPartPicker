import React from "react";
import { Link } from "react-router-dom";
import './Contact.css'
const Contact = () => {
    return (
        <>
            <div>
            <div className="text-light about-section paddingTB60 gray-bg" style={{marginTop:"50px"}}>
                <div className="container">
                    <div className="row">
						<div className="col-md-7 col-sm-6">
							<div className="about-title clearfix">
								<h1>About <span className="text-success">PcPartPicker</span></h1>
								<h3>Build Your Dream PC! </h3>
                                <hr />
								<p className="about-paddingB">At PCPartPicker, we empower you to build the perfect PC with ease. Our interactive web app provides a seamless experience for users of all expertise levels, from seasoned builders to first-time enthusiasts. With a vast selection of components, real-time compatibility checks, and live price comparisons, you can confidently create a custom PC that meets your performance, budget, and aesthetic needs.</p>
                                <hr />
								<p>We are passionate about simplifying the PC building process, offering tools that ensure your parts work together without any hassle. Whether you're creating a gaming rig, a workstation, or a budget-friendly setup, PCPartPicker is here to guide you from start to finish. Happy building!</p>
                                <div>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fa-2x fab fa-facebook-f"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fa-2x fab fa-twitter"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fa-2x fab fa-google"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fa-2x fab fa-instagram"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fa-2x fab fa-linkedin"></i>
                                </Link>
                                <Link to="/" className="me-4 text-reset">
                                    <i className="fa-2x fab fa-github"></i>
                                </Link>
                            </div>
							</div>
						</div>
						
                    </div>
                </div>
                
            </div>
            <section id="reviews-62">
                    <div className="cs-container">
                        <div className="cs-content">
                            <span className="cs-topper">Our Reviews</span>
                            <h2 className="cs-title">Words From Our Customers</h2>
                            <p className="cs-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor volutpat porttitor sagittis nunc nisl. Sagittis sit pellentesque gravida viverra. Leo ut sed euismod tortor risus et. Ornare non neque, leo, ornare. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                            <ul className="cs-card-group">
                                <li className="cs-item">
                                    <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile1.png" alt="profile" width="68" height="68"/>
                                    <span className="cs-name">John Doe</span>
                                    <span className="cs-desc">Texas</span>
                                    <p className="cs-item-text">
                                        Proin massa eros, quis fringilla sagittis. Euismod scelerisque varius sed nec consequat, turpis.
                                    </p>
                                </li>
                                <li className="cs-item">
                                    <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile2.png" alt="profile" width="68" height="68"/>
                                    <span className="cs-name">Jane Smith</span>
                                    <span className="cs-desc">California</span>
                                    <p className="cs-item-text">
                                        Proin massa eros, quis fringilla sagittis. Euismod scelerisque varius sed nec consequat, turpis.
                                    </p>
                                </li>
                                <li className="cs-item">
                                    <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Reviews/profile3.png" alt="profile" width="68" height="68"/>
                                    <span className="cs-name">Thomas Madden</span>
                                    <span className="cs-desc">Texas</span>
                                    <p className="cs-item-text">
                                        Proin massa eros, quis fringilla sagittis. Euismod scelerisque varius sed nec consequat, turpis.
                                    </p>
                                </li>
                            </ul>
                            <a aria-label="read more reviews" href="" className="cs-button-solid">Read More</a>
                        </div>
                    </section>
            </div>
        </>
    );
};

export default Contact;
