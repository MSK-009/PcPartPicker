import React from "react";
import { Link } from "react-router-dom";
import './Contact.css'
import { useState, useEffect } from "react";
const itemsData = [
    {
      id: 1,
      name: 'Muhammad Hamza',
      location: 'SE-22092',
      imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQEXCJtadzsnww/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729017534122?e=1735171200&v=beta&t=q9pN4afFDQUOO3Jz8834cJl1YuwdIxjy1TS1tHEVhwM',
      text: "At PcPartPicker, we believe that everyone should have the opportunity to create their perfect computer. Our platform simplifies the process, We can't wait to see the amazing builds you create!"
    },
    {
      id: 2,
      name: 'Muhammad Shahzeb Khan',
      location: 'SE-22070',
      imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQFgW_8C6XN6QQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1681092436522?e=1735171200&v=beta&t=r-4_BrGF7ItZlBnyu2dd7zCxEvvPKV23oWmA1Kv1E7Y',
      text: "Building a PC is more than just assembling parts—it's about creating a machine that reflects your unique needs and passions. Our community is here to support you every step of the way"
    },
    {
      id: 3,
      name: 'Ali Ahmed Shaikh',
      location: 'SE-22089',
      imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQEGnNRh34kiWQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727108125468?e=1735171200&v=beta&t=ke0H1A6XqS71waVWHsnOLhYG8VjVqTjghigsCMYf3i0',
      text: 'When I first built my own PC, it was a game-changer. I wanted to create a platform that empowers others to experience that same thrill. With BuildMyPC, you have the tools, knowledge, and community at your fingertips to craft your dream machine. '
    },
    {
      id: 4,
      name: 'Umer Saleh',
      location: 'SE-22076',
      imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQFPnNmPvkwncg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680524087590?e=1735171200&v=beta&t=sGDuoRaQRgfeB3tgAvCV51MU66XYps1UoOiPSjRk0lE',
      text: "Our mission is to demystify PC building for everyone. Whether you're looking to game, create, or just need a reliable workstation, our intuitive tools and comprehensive guides will ensure you have everything you need to succeed. "
    },
    {
        id: 5,
        name: 'Ahmed Baig',
        location: 'SE-22068',
        imgSrc: 'https://media.licdn.com/dms/image/v2/D4E03AQG_D8qr19YuTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723324851136?e=1735171200&v=beta&t=uwIqTgCm4oNCpdPKzumU_lhYcrGmJeZj_4zxvt4J7mc',
        text: 'The community here is amazing! I got so much help and advice while building my first PC. I love being able to share my progress and get feedback from others. Thank you, PcPartPicker!'
    },
    {
        id: 6,
        name: 'Muhammad Huzaifa',
        location: 'SE-22080',
        imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQG5DmW977xi9A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1680607259673?e=1735171200&v=beta&t=yI3Mgl8qFsnwR93oN59fyIEn9PjX0Jj6y8T-1bsVJnY',
        text: "Our goal is to make PC building accessible to everyone. Whether you're aiming to game, create, or require a dependable workstation, our user-friendly tools and thorough guides will provide you with everything you need to thrive."
    },
    {
        id: 7,
        name: 'Noor-ul-Talha',
        location: 'SE-22072',
        imgSrc: 'https://media.licdn.com/dms/image/v2/D4D03AQHxSIbK7iHzew/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728845048687?e=1735171200&v=beta&t=xFV0ln8xeK-zm9-mGUO2pUIJv817f7psFZlVbdYpSNM',
        text: 'We’ve poured our hearts into PcPartPicker to make it a welcoming space for all PC builders. '
    },

  ];

const Contact = () => {
    const [items, setItems] = useState(itemsData);
      
    function shuffleArray(array) {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    useEffect(() => {
        setItems(shuffleArray(itemsData)); // Shuffle items on component mount
      }, []);
    
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
                                    <Link to="/" className="me-4 text-reset hover-text-success">
                                        <i className="fa-2x fab fa-facebook-f"></i>
                                    </Link>
                                    <Link to="/" className="me-4 text-reset hover-text-success">
                                        <i className="fa-2x fab fa-twitter"></i>
                                    </Link>
                                    <Link to="/" className="me-4 text-reset hover-text-success">
                                        <i className="fa-2x fab fa-google"></i>
                                    </Link>
                                    <Link to="/" className="me-4 text-reset hover-text-success">
                                        <i className="fa-2x fab fa-instagram"></i>
                                    </Link>
                                    <Link to="/" className="me-4 text-reset hover-text-success">
                                        <i className="fa-2x fab fa-linkedin"></i>
                                    </Link>
                                    <Link to="/" className="me-4 text-reset hover-text-success">
                                        <i className="fa-2x fab fa-github"></i>
                                    </Link>
                                </div>
							</div>
						</div>
						
                    </div>
                </div>
                
            </div>
            <section id="reviews-62">
                    <div class="cs-container">
                        <div class="cs-content">
                            <span class="cs-topper">Our Reviews</span>
                            <h2 class="cs-title">Words From the Founders</h2>
                            <p class="cs-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dolor volutpat porttitor sagittis nunc nisl. Sagittis sit pellentesque gravida viverra. Leo ut sed euismod tortor risus et. Ornare non neque, leo, ornare. Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <ul className="cs-card-group">
                            {items.map(item => (
                                <li key={item.id} className="cs-item">
                                <img className="cs-img" aria-hidden="true" loading="lazy" decoding="async" src={item.imgSrc} alt="profile" width="68" height="68" />
                                <span className="cs-name">{item.name}</span>
                                <span className="cs-desc">{item.location}</span>
                                <p className="cs-item-text">{item.text}</p>
                                </li>
                            ))}
                        </ul>
                        <a aria-label="read more reviews" href="" class="cs-button-solid">Read More</a>
                        </div>
                    </section>
            </div>
            <div class="lines">
            </div>
        </>
    );
};

export default Contact;
