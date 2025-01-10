import React from 'react';
import ContactForm from '../ContactFrom'
import BookingForm from '../BookingForm';
import CheckWrap from '../CheckWrap';
import { Grid } from '@material-ui/core';
import whatsapp1 from "../../images/allimg/whatsapp/whatsapp1.png";

const Booking = () => {

    return(
        <section className="wpo-contact-pg-section section-padding " style={{marginTop:"-150px",backgroundColor:'#202026'}}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                    {/* <div className="col col-lg-12 offset-lg-1"> */}
                       
                        {/* <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div> */}
                        
                        <div
  className="wpo-contact-form-area"
  style={{
    borderRadius: "4px",
    // background: "linear-gradient(to bottom, #99B02C, white)",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  
    
  }}
>
    
  {/* <BookingForm /> */}
  <div className="form-field" style={{ display: 'flex' ,gap:'30px',justifyContent:'center'}}>
  <h4 style={{marginTop:'15px'}}>Contact us on WhatsApp for pricing</h4>
  <a
    href="https://wa.me/918971220576"
    target="_blank"
    rel="noopener noreferrer"
    className="theme-btn d-flex align-items-center"
    style={{ borderRadius: "3px", height: "55px", textDecoration: "none" ,marginBottom:'20px'}}
  >
    <img
      src={whatsapp1}
      alt="WhatsApp Icon"
      style={{ height: "40px", marginRight: "8px" }}
    />
    Book Now
  </a>
</div>

  
</div>

                    </div>                
                </div>
                
            </div> 
        
            {/* <Grid className="checkoutWrapper section-padding">
                <Grid className="container" container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <div className="check-form-area">
                        <Grid className="cuponWrap checkoutCard">
                               
                                <Grid className="chCardBody">
                                       
                                       
                                            <Grid>
                                                <CheckWrap/>
                                            </Grid>
                                      
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    </Grid>
                    </Grid> */}
        </section>
        
     )
        
}

export default Booking;
