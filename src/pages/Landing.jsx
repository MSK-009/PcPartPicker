import React, { useState, useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'
import ScrollDown from '../components/ScrollDown';
import Offer from '../components/Offer';
const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>PcPartPicker!</i>'],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-black bg-transparent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 px-6 px-md-0">
              <h1 className="heading-home">Welcome to <span style={{ color: "#2FA44D" }} id="element" ref={el}></span></h1>
              <p className="lead text-light">
                A place where you can build your own PC. That is truly yours.
                <br />
                <br />
                Choose the components that suit your needs and create a custom build tailored to your 
                  <span className='text-danger fw-bold'> gaming </span>, 
                  <span className='text-info fw-bold'> productivity </span>, or 
                  <span className='text-success fw-bold'> creative tasks</span>.
              </p>
              {/* <Link className="btn btn-success btn-lg mt-3 text-light" to="/processors">Make Your Own PC</Link> */}
              <br />
              <Link class="threed-getstarted-btn" to="/processors">
                Make Your Own PC&nbsp;&nbsp;
                <i class="bi bi-pc-display-horizontal"></i>
              </Link>
            </div>
            <div className="col-md-6 text-center">
              <img src="./assets/pc.png" alt="Computer" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>
      <ScrollDown />
      {/* Carousel */}
      <div className="carousel-slide-container">
        <div className='display-5 fw-bold text-white text-center'>Check out these PRE-BUILT PCs</div>
      <div id="carouselExampleIndicators" className="carousel slide container" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./assets/pc1.webp" className="d-block m-auto w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./assets/pc2.webp" className="d-block m-auto w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./assets/pc3.webp" className="d-block m-auto w-50" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./assets/pc4.png" className="d-block m-auto w-50" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>

      {/* Parts */}
      <div className='container my-5' id="parts">
      <div className='d-flex gap-5 my-5 flex-wrap justify-content-center'>

      <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/cpu.webp" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Processor</h5>
            <p className="card-text">Build your ultimate gaming rig with top-tier processors for unbeatable performance!</p>
            <Link to="/processors" className="btn btn-success">
            Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/gpu.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Graphics Card</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/gpu" className="btn btn-success">
              Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/mobo.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Motherboard</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/motherboard" className="btn btn-success">
            Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/ram.webp" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">RAM</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/memory" className="btn btn-success">
            Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/ssd.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Storage</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/storage" className="btn btn-success">
            Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/case.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Case</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/cases" className="btn btn-success">
            Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>

        <div className="col-md-3 card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/psu.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">PSU</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/psu" className="btn btn-success">
            Get this part&nbsp;&nbsp;
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="size-4 stroke-1" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13h14.586l-5.293 5.293 1.414 1.414L21.414 12l-7.707-7.707-1.414 1.414L17.586 11H3z"></path>
              </svg>
            </Link>
          </div>
        </div>
        </div>



      </div>

    </>
  )
}

export default Home
