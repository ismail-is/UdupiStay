import React from 'react';
import ContactForm from '../ContactFrom';
import BookingForm from '../BookingForm';
import CheckWrap from '../CheckWrap';
import { Grid, makeStyles } from '@material-ui/core';
import WhiteVillaform from '../WhiteVillaform';
import Offer from '../Offer';
import TopVillaform from '../TopVillaform';

const useStyles = makeStyles((theme) => ({
    sticker: {
      position: "absolute", // Position the sticker absolutely within the parent
      right: "5px", // Align to the right side
      top: "35px", // Vertical alignment
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "120px", // Width of the circle
      height: "120px", // Height of the circle
      textAlign: "center",
      background: "linear-gradient(294deg, rgb(134 18 176 / 45%), rgb(150, 176, 18))",
      color: "#fff",
      borderRadius: "50%", // Make it a perfect circle
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.8s ease",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    ribbon1: {
      position: "absolute",
      top: "15px",
      right: "-30px",
      background: "#ffd700",
      color: "#333",
      fontWeight: "bold",
      fontSize: "14px",
      padding: "5px 10px",
      transform: "rotate(15deg)",
      borderRadius: "5px",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      animation: "rotateRibbon 2s infinite", // Add animation here
      "&:hover": {
        transform: "rotate(10deg)",
      },
    },
    ribbon2: {
      position: "absolute",
      top: "10px",
      left: "70px",
      background: "#ffd700",
      color: "#333",
      fontWeight: "bold",
      fontSize: "18px",
      padding: "4px 8px",
      transform: "rotate(0deg)",
      borderRadius: "5px",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      animation: "rotateRibbon 2s infinite",
     
    },
    "@keyframes rotateRibbon": {
      "0%, 100%": { transform: "rotate(15deg)" },
      "50%": { transform: "rotate(10deg)" },
    },
    checkInOutBadge: {
      display: "inline-block",
      padding: "10px 20px",
      // backgroundColor: "#f1c40f", // Golden badge color
      color: "#0D0845",
      fontWeight: "bold",
      fontSize: "14px",
      borderRadius: "1px",
      textAlign: "center",
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      margin: "10px auto",
      // transform: "scale(1)",
      // transition: "transform 0.3s ease",
      // "&:hover": {
      //   transform: "scale(1.1)",
      // },
    },
  }));

const TopVillaBook = () => {
    const classes = useStyles();
    // Price Data: Key as month range, value as price
  const prices = {
    "January-March": "6,200",
    "April-May": "7,800",
    "June-August": "6,200",
    "September-December 20": "7,800 ",
    "December 20-31": "12,500 ",
  };

  // Function to determine current price based on the month
  const getCurrentPrice = () => {
    const month = new Date().getMonth() + 1; // JS months are 0-indexed

    if (month >= 1 && month <= 3) return prices["January-March"];
    if (month >= 4 && month <= 5) return prices["April-May"];
    if (month >= 6 && month <= 8) return prices["June-August"];
    if (month >= 9 && month <= 12) {
      const day = new Date().getDate();
      if (month === 12 && day > 20) return prices["December 20-31"];
      return prices["September-December 20"];
    }
    return "N/A"; // Default fallback
  };

  const currentPrice = getCurrentPrice();
    return(
        <section className="wpo-contact-pg-section section-padding " style={{marginTop:'-90px',marginBottom:'150px'}}>
            <div className="container" >
                
                <div className="row">
                
                    <div className="col col-lg-12" >
                    <div className={classes.checkInOutBadge}>
              CHECK IN TIME 12.30 PM <br /> CHECK OUT TIME 10.00 AM
            </div>
                        <div className="wpo-contact-form-area" style={{ borderRadius: "4px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)", background: "linear-gradient(232deg, #96b01280, #96b012)", }}>
                            <div className={classes.ribbon1}>Book Now to<br/> Get 10% Off</div>
                            <h5 className={classes.ribbon2} style={{fontFamily:'poppins'}}> Price Per Day : {currentPrice} </h5>
                            <TopVillaform />
                        </div>

                    </div>                
                </div>
                
            </div> 
        </section>
    );
};

export default TopVillaBook;
