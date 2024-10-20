import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom'

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
      <section className="bg-black py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold text-light">Welcome to <span style={{ color: "#915EFF" }} id="element" ref={el}></span></h1>
              <p className="lead text-light">
                Discover amazing features and great content right at your fingertips. Join us and explore a world of opportunities tailored just for you.
              </p>
              <Link to="/" className="btn btn-success btn-lg mt-3 text-light">Get Started</Link>
            </div>
            <div className="col-md-6 text-center">
              <img src="./assets/pc.png" alt="Computer" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide container">
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

      {/* Parts */}

      <div className='d-flex gap-5 my-5 flex-wrap justify-content-center'>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/cpu.webp" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Processor</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/gpu.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Graphics Card</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/motherboard.webp" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Motherboard</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/ram.webp" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">RAM</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/ssd.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Storage</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/case.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Case</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>

        <div className="card bg-success-subtle" style={{width: "18rem"}}>
          <img src="./assets/psu.jpg" className="card-img-top h-50" alt="..." />
          <div className="card-body">
            <h5 className="card-title">PSU</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/" className="btn btn-success">Go somewhere</Link>
          </div>
        </div>



      </div>

    </>
  )
}

export default Home
