import React from 'react';
import ContactForm from '../ContactFrom';

const Contactpage = () => {
    return (
        <section className="wpo-contact-pg-section section-padding" >
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                {/* Address Section */}
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-location"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Address</h2>
                                            <p>H.No. 4-4-95, Bhaghat Singh Marg, Udupi 576101</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Email Section */}
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Email Us</h2>
                                            <p>
                                                <a href='mailto:fahad@udupistay.com' style={{ color: "#595959" }}>fahad@udupistay.com</a>
                                            </p>
                                            <a href='mailto:asif@udupistay.com' style={{ color: "#595959" }}>asif@udupistay.com</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Call Section */}
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-telephone"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Call Now</h2>
                                            <p>
                                                <a href='https://wa.me/918971220576' style={{ color: "#595959" }}>+91 89712 20576</a>
                                            </p>
                                            <a href='tel:+918050123132' style={{ color: "#595959" }}>+91 80501 23132</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Title */}
                        <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            {/* <p>It is a long established fact that a reader will be distracted by the content of a page when looking.</p> */}
                        </div>

                        {/* Contact Form */}
                        {/* <div className="wpo-contact-form-area">
                            <ContactForm />
                        </div> */}
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <section className="wpo-contact-map-section" style={{marginTop:'130px'}}>
                <div className="container">
                    <div className="row">
                        {/* Map 1 */}
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h4 style={{textAlign:'center'}}>WHITE HOUSE</h4>
                            <div className="wpo-contact-map" style={{ border: '3px solid #8EA429', borderRadius: '10px' }}>
                               
                                <iframe
                                    title="Map 1"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.2571521159443!2d74.7420341!3d13.328624900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb3933f8ba97%3A0x2012b1a29485f75b!2sUDUPI%20HOMESTAY%2F%20WHITE%20HOUSE!5e1!3m2!1sen!2sin!4v1734434136143!5m2!1sen!2sin"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* Map 2 */}
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h4 style={{textAlign:'center'}}>GARDEN VILLA</h4>
                            <div className="wpo-contact-map" style={{ border: '3px solid #8EA429', borderRadius: '10px' }}>
                                <iframe
                                    title="Map 2"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.5378619072985!2d74.7204502!3d13.387320100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbd3e8311f751%3A0x942541c0bcbf48cf!2sUDUPI%20HOMESTAY%2FGARDEN%20VILLA!5e1!3m2!1sen!2sin!4v1734434243526!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        {/* Map 3 */}
                        <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <h4 style={{textAlign:'center'}}>OTHER HOME STAYS</h4>
                            <div className="wpo-contact-map" style={{ border: '3px solid #8EA429', borderRadius: '10px' }}>
                                <iframe
                                    title="Map 3"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2957.7638565545876!2d74.7876347!3d13.2871242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca5008f8b9ac9%3A0xbd5f9d1a1688b130!2sUDUPI%20HOMESTAY%2F%20SUNRISE%20HOME!5e1!3m2!1sen!2sin!4v1734434319721!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Contactpage;
