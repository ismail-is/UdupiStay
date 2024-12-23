import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/allimg/Homestay/homeabout.webp'

const About5 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className={`wpo-about-area section-padding ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={abimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                {/* <span>One State Many Worlds-Karnataka</span> */}
                                <h2>Experience Unique Comfort at Udupi Homestay</h2>
                            </div>
                        {/* <h5>Experience the perfect blend of comfort and culture at Udupi Homestays, proudly recognized by Karnataka Tourism for excellence in hospitality.</h5> */}
                        <p>Discover six distinct homestays, each with unique themes and designs, offering a personalized retreat. Enjoy a spacious park for gatherings, a refreshing pool with a jacuzzi, and a stunning rooftop view.</p>
                        {/* <p>Our accommodations cater to families, travelers, and business guests, offering modern amenities with a touch of Karnataka's rich heritage.</p> */}
                        {/* <p>Book now and discover why Udupi Homestays is the top choice for a truly authentic experience.</p> */}
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                {/* <ul>
                                    <li className="video-holder">
                                        <VideoModal/>
                                    </li>
                                    <li className="video-text">
                                         Watch Our Video
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About5;