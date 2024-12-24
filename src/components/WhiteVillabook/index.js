import React from "react";
import WhiteVillaform from "../WhiteVillaform";
import { makeStyles } from "@material-ui/core";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa"; // Using FontAwesome icons

const useStyles = makeStyles((theme) => ({
  sticker: {
    position: "absolute",
    right: "5px",
    top: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "120px",
    height: "120px",
    textAlign: "center",
    background: "linear-gradient(294deg, rgb(134 18 176 / 45%), rgb(150, 176, 18))",
    color: "#fff",
    borderRadius: "50%",
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
    animation: "rotateRibbon 2s infinite",
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
  ribbon3: {
    position: "absolute",
    bottom: "15px",
    right: "1px",
    background: "#ffd700",
    color: "#333",
    fontWeight: "bold",
    fontSize: "14px",
    padding: "5px 10px",
    transform: "rotate(0deg)",
    borderRadius: "5px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    animation: "rotateRibbon 2s infinite",
    "&:hover": {
      transform: "rotate(10deg)",
    },
  },

  // Badge style for Check In and Check Out label
  checkInOutBadge: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#f1c40f", // Golden badge color
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
    borderRadius: "50px",
    textAlign: "center", // Center text
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    margin: "20px auto",
    transform: "scale(1)",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },

  // Adding some creative background and design to the section
  sectionStyle: {
    marginTop: "-90px",
    marginBottom: "150px",
    background: "linear-gradient(to top right, #ff8c00, #e52e71)", // Gradient background
    padding: "50px 0",
    borderRadius: "15px",
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
  },

  // Form area style with more creativity
  formArea: {
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    background: "linear-gradient(232deg, #96b01280, #96b012)",
    padding: "40px",
    position: "relative",
  },

  // Price text style
  priceText: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: "20px",
    animation: "fadeIn 2s ease-in-out", // Adding fade-in animation for price text
  },

  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },

  // Button Style for interaction
  buttonStyle: {
    display: "inline-block",
    padding: "12px 30px",
    backgroundColor: "#f1c40f",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    "&:hover": {
      backgroundColor: "#e52e71",
      transform: "scale(1.05)",
    },
  },
}));

const WhiteVillabook = () => {
  const classes = useStyles();

  // Price Data: Key as month range, value as price
  const prices = {
    "January-March": "10,800",
    "April-May": "13,600",
    "June-August": "10,800",
    "September-December 20": "13,600",
    "December 20-31": "19,950",
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

  return (
    <section className={classes.sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className={classes.checkInOutBadge}>
              <FaRegClock style={{ marginRight: "10px" }} /> CHECK IN TIME 12.30 PM & <br />
              <FaRegCalendarAlt style={{ marginRight: "10px" }} /> CHECK OUT TIME 10.00 AM
            </div>
            <div className={classes.formArea}>
              <div className={classes.ribbon1}>
                Book Now to<br /> Get 10% Off
              </div>
              <h5 className={classes.priceText}>Price Per Day: {currentPrice}</h5>
              <WhiteVillaform />
              <button className={classes.buttonStyle}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteVillabook;
