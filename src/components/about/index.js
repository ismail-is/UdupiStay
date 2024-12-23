import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import img1 from '../../images/allimg/karnataka.webp'


const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-about-area section-padding ${props.abClass}`} >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={img1} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>One State Many Worlds-Karnataka</span>
                                <h2>Recognized by Karnataka Tourism: Best Homestays in Udupi</h2>
                            </div>
                        {/* <h5>Experience the perfect blend of comfort and culture at Udupi Homestays, proudly recognized by Karnataka Tourism for excellence in hospitality.</h5> */}
                        <p>Experience the perfect blend of comfort and culture at Udupi Homestays, proudly recognized by Karnataka Tourism for excellence in hospitality.</p>
                        <p>Our accommodations cater to families, travelers, and business guests, offering modern amenities with a touch of Karnataka's rich heritage.</p>
                        <p>Book now and discover why Udupi Homestays is the top choice for a truly authentic experience.</p>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                         Watch Our Video
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;