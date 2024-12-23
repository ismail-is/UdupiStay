import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/allimg/Homestay/homeabout.webp'
import abimg2 from '../../images/about-shape3.png'


const About4 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (

        <div className="wpo-about-area-s4 section-padding" style={{marginTop:'-65px'}}>
            <div className="container">
                <div className="row align-items-center" style={{marginTop:'130px'}}>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={abimg} alt="" />
                            <div className="wpo-about-img-text">
                                <h2>6+</h2>
                                <p>Signature Homestays</p>
                                <div className="about-shape">
                                    <img src={abimg2} alt="" />
                                </div>
                            </div>
                            <div className="left-shape">
                                <div className="square-shape"></div>
                                <div className="shape-top">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="shape-left">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span>About Us</span>
                                <h2 style={{fontSize:'35px'}}>Experience Unique Comfort at Udupi Homestay</h2>
                            </div>
                            {/* <h5>Discover six distinct homestays, each with unique themes and designs, offering a personalized retreat. Enjoy a spacious park for gatherings, a refreshing pool with a jacuzzi, and a stunning rooftop view.</h5> */}
                            <p>Discover six distinct homestays, each with unique themes and designs, offering a personalized retreat. Enjoy a spacious park for gatherings, a refreshing pool with a jacuzzi, and a stunning rooftop view.</p>
                            <div className="btns">
                                <Link to="/about" onClick={ClickHandler} className="theme-btn">Discover More</Link>
                                <ul>
                                    <li className="video-holder">
                                        <VideoModal />
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
            <div className="invisible-title1">
                <h2>About</h2>
            </div>
        </div>
    )
}

export default About4;