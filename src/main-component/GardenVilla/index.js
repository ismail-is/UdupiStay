import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import PageTitle from '../../components/pagetitle'
import About from '../../components/about'
import ProjectSection from '../../components/Projects';
import ServiceSection from '../../components/Services';
import Pricing from '../../components/Pricing'
import FunFact from '../../components/FunFact'
import TeamSection from '../../components/TeamSection';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/allimg/logo/logo black.png'
import abimg from '../../images/about.jpg'
import WhiteVillabook from '../../components/WhiteVillabook';
import Discuss from '../ServiceSinglePage/discuss';
import RelatedProject from '../ProjectSinglePage/related';
import BlogList from '../../components/BlogList';
import Offer from '../../components/Offer';
import GardenVillabook from '../../components/GardenVillabook';
import gameimg from '../../images/icons/game room.png'
import HIghspeed from '../../images/icons/HIghspeed.png'
import Outdoor from '../../images/icons/Outdoor.png'
import DRIVERS from '../../images/icons/DRIVERS.png'
import Hall from '../../images/icons/Hall.png'
import cleaning from '../../images/icons/cleaning.png'
import Kitchen from '../../images/icons/Kitchen.png'
import i24 from '../../images/icons/i24.png'
import GardenImg from '../../components/GardenImg';
import green from '../../images/allimg/HomeSlider/green.webp'
import img1 from '../../images/allimg/HomeSlider/green.webp'
import { makeStyles } from "@material-ui/core";
import GardenVillaVideo from '../../components/GardenVillaVideo';




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
      left: "50px",
      background: "#96b012",
      color: "#f9f9fc",
      fontWeight: "bold",
      fontSize: "22px",
      padding: "4px 8px",
      transform: "rotate(0deg)",
      borderRadius: "5px",
      boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.2)",
      animation: "rotateRibbon 2s infinite",
     
    },
    "@keyframes rotateRibbon": {
      "0%, 100%": { transform: "rotate(15deg)" },
      "50%": { transform: "rotate(10deg)" },
    },
  }));


  
const GardenVilla =() => {
    

    const classes = useStyles();

    // Price Data: Key as month range, value as price
    const prices = {
      "January-March": "9,800",
      "April-May": "12,500",
      "June-August": "98,00" ,
      "September-December 20": "12,500" ,
      "December 20-31": "21,950" ,
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
        <Fragment>
            <Navbar Logo={Logo}/>
            <PageTitle pageTitle={'GARDEN VILLA'} src={green}/> 
           
            <div className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                    
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>Garden Themed 5-BHK Fully Furnished Villa
                                                </h3>
                                            </div>
                                            <p>This exquisite garden-themed villa offers a serene and luxurious escape with 5 spacious  bedrooms with air-condition. Fully furnished with modern amenities, it guarantees a comfortable and enjoyable stay. Located just 6 kilometers from both Udupi and Malpe Beach, the villa is surrounded by lush greenery, creating a peaceful and private atmosphere. </p>
                                            <p>The stunning terrace garden invites guests to unwind amidst nature, while the high compound wall ensures complete security and privacy. Experience the charm of nature and luxury combined for an unforgettable stay in this remarkable villa.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Property Type: <span>Garden House</span></li>
                                                    <li>Capacity :<span>20 Guests</span></li>
                                                    <li>Rooms :<span>5BHK with A/C</span></li>
                                                    <li>Location :<span>Udupi, Karnataka</span></li>
                                                    <li>Features :<span> Ideal for families and Friends</span></li>
                                                    <li>Facilities :<span>Free Wi-Fi, Fully Equipped Kitchen, Parking</span></li>
                                                    {/* <li>Share :<span>Architectural, Business</span></li> */}
                                                    {/* <li><h5 className={classes.ribbon2} style={{fontFamily:'poppins'}}> Price Per Day : {currentPrice} </h5> </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div className="wpo-project-single-main-img">
                                        <img src={img1} alt=""/>
                                    </div>


                                  
                                    {/* <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Our Strategies</h3>
                                                </div>
                                                <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                    quam. Id
                                                    risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                    sollicitudin diam.</p>
                                                <ul>
                                                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                    <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                    <li>Elit curabitur amet risus bibendum.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-item-quote">
                                                    <p>"Amazing looking theme and instantly turns your application into a great
                                                        looking one. Really shows that pro_ fessionals built this theme up. Very
                                                        happy with the way the theme looks ."</p>
                                                    <span>Robert - <span>Yellow Theme</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div >
                                    {/* <GardenVillabook/> */}
                                    </div>
                                    {/* <div className="wpo-project-single-item">
                                        <div className="wpo-project-single-title">
                                            <h3>Our approach</h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                            tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                            eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                            elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                            id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                            adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                            vulputate diam interdum morbi ac a.</p>
                                    </div> */}
                                    {/* <div className="wpo-project-single-gallery">
                                        <div className="row mt-4">
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src='https://arkio-react.wpocean.com/static/media/p2.2b3319864ab05fdaa9bd.jpg' alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-12">
                                                <div className="wpo-p-details-img">
                                                    <img src='https://arkio-react.wpocean.com/static/media/p1.6722c8372f0f23e2737c.jpg' alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <div className="wpo-project-single-item list-widget">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="wpo-project-single-title">
                                                    <h3>Resieved goals</h3>
                                                </div>
                                                <ul>
                                                    <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                    <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                    <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                    <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 list-widget-s">
                                                <div className="wpo-project-single-title">
                                                    <h3>Results</h3>
                                                </div>
                                                <ul>
                                                    <li>Mauris dignissim blandit cursus imperdiet accumsan lorem.</li>
                                                    <li>Nam id in non sed cras purus nunc et.</li>
                                                    <li>Mauris orci, cursus nisl odio est adipiscing gravida magna eget.</li>
                                                    <li>Quis mauris vel felis convallis nulla dignissim.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <BlogList/> */}
                                    {/* <RelatedProject/>
                                    <Discuss/> */}


<GardenVillaVideo/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





<GardenImg/>

<div className="wpo-project-single-area" style={{marginTop:'20px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    
                               
                                   
                               
                                   
                                    <div className="wpo-service-single-item">
            <div className="wpo-service-single-title">
                <h3>Facilities</h3>
            </div>
            <div className="wpo-service-area">
                <div className="row align-items-center">
                    {/* {Services.slice(0,3).map((service, sitem) => ( */}
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={Hall}></img>
                            {/* <i className='fi flaticon-planning' ></i> */}
                                <h5>  Roof Top
                                Garden</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={gameimg}></img>
                                <h5> Out Door
                                Game Room</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={Outdoor}></img>
                                <h5 style={{textAlign:"center"}}>Outdoor
                                BBQ</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={HIghspeed}></img>
                                <h5 >High-speed
                                Internet</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>


                        
                    {/* ))} */}
                </div>
            </div>
            <div className="wpo-service-area" >
                <div className="row align-items-center">
                    {/* {Services.slice(0,3).map((service, sitem) => ( */}
                        
                    <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={DRIVERS}></img>
                                <h5 > Drivers
                                Accommodation</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={Kitchen}></img>
                                <h5 > Complete
                                Kitchen Utensils</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={i24}></img>
                                <h5 > 24 Hrs
                                Water & Electriciy</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-6" >
                            <div className="wpo-service-item" style={{textAlign:'center'}}>
                            <img src={cleaning}></img>
                                <h5 > Free
                                Cleaning</h5>
                                {/* <p>{service.des2}</p> */}
                            </div>
                        </div>

                        
                    {/* ))} */}
                </div>
            </div>
        </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Testimonial/> */}
            <Footer ftClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default GardenVilla;
