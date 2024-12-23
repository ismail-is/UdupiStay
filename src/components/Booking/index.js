import React from 'react';
import ContactForm from '../ContactFrom'
import BookingForm from '../BookingForm';
import CheckWrap from '../CheckWrap';
import { Grid } from '@material-ui/core';


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
  <BookingForm />
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
