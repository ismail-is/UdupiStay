import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

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
    background: "linear-gradient(119deg, #96b01280, #96b012)",
    color: "#fff",
    borderRadius: "50%", // Make it a perfect circle
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
    // transform: animate ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.8s ease",
  },
  ribbon: {
    position: "absolute",
    top: "-10px",
    right: "-10px",
    background: "#ffd700",
    color: "#333",
    fontWeight: "bold",
    fontSize: "14px",
    padding: "5px 10px",
    transform: "rotate(15deg)",
    borderRadius: "5px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
  },
}));

const Offer = () => {
  const [animate, setAnimate] = useState(false);
  const classes = useStyles();

  // Trigger animation every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 800); // Reset animation after its duration
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div style={{ position: "relative", height: "100px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",zIndex:'100' }}>
      <div className={classes.sticker}>
        {/* Decorative Sticker Ribbon */}
        <div className={classes.ribbon}>10% OFF</div>

        {/* Main Sticker Content */}
        <div>
          <h5 style={{ fontSize: "16px", fontWeight: "bold", margin: "0" }}>
            Book Now
          </h5>
          <p style={{ fontSize: "12px", lineHeight: "1.5", margin: "5px 0" }}>
            Get an Exclusive
            <br /> Discounts!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
