import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/allimg/Catering/Caterings.webp'
import abimg2 from '../../images/about-shape.jpg'


const About3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="wpo-about-area-s3 section-padding">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12" >
                        <div className="wpo-about-img">
                            <img src={abimg} alt=""/>
                            {/* <div className="wpo-about-img-text">
                                <h2>25+</h2>
                                <p>Years of Experience</p>
                                <div className="about-shape">
                                    <img src={abimg2} alt=""/>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 colsm-12" style={{marginTop:'-80px'}}>
                        <div className="wpo-about-text">
                            {/* <h1>About Us</h1> */}
                            <div className="wpo-about-title">
                                <h2>Exceptional Catering Services for Your Special Occasions</h2>
                            </div>
                            <p>We take pride in offering exceptional catering services for all your special occasions. Whether it's a grand wedding, a large-scale party, or an intimate family gathering, our team is dedicated to delivering</p>
                            {/* <ul className="ab-list">
                                <li>We provide free initial consultation and support.</li>
                                <li>We have the professional designers team.</li>
                                <li>We work with some of the most successful businesses.</li>
                            </ul> */}
                            <p>Our catering menu is thoughtfully crafted, featuring a wide range of dishes prepared with fresh, high-quality ingredients to suit your preferences and the occasion. From traditional delicacies to contemporary favorites, we ensure that every dish is a perfect blend of taste and presentation</p>
                            {/* <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
                                    </li>
                                    <li className="video-text">
                                        Watch Our Video
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About3;