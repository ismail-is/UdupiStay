// images
import blogImg1 from "../images/blog/img-4.jpg";
import blogImg2 from "../images/blog/img-5.jpg";
import blogImg3 from "../images/blog/img-6.jpg";

import blogSingleImg1 from "../images/blog/img-4.jpg";
import blogSingleImg2 from "../images/blog/img-5.jpg";
import blogSingleImg3 from "../images/blog/img-6.jpg";
import Cottage from "../images/allimg/Homestay/Cottage.webp";
import HillTop from "../images/allimg/Homestay/HillTop.webp";
import Sunrise from "../images/allimg/Homestay/Sunrise.webp";
import Chalet from "../images/allimg/Homestay/Chalet.webp";
import Garden from "../images/allimg/Homestay/Garden .webp";
import Viewpoint from "../images/allimg/Homestay/Viewpoint.webp";
import white from "../images/allimg/Homestay/white.webp";
import img1 from '../images/allimg/view/10.webp';


// Assuming currentPrice is already computed with getCurrentPrice function

const getPriceForCurrentPeriod = (priceObj) => {
    const month = new Date().getMonth() + 1; // JS months are 0-indexed
    const day = new Date().getDate();
  
    if (month >= 1 && month <= 3) return priceObj["January-March"];
    if (month >= 4 && month <= 5) return priceObj["April-May"];
    if (month >= 6 && month <= 8) return priceObj["June-August"];
    if (month >= 9 && month <= 12) {
      if (month === 12 && day > 20) return priceObj["December 20-31"];
      return priceObj["September-December 20"];
    }
    return "N/A"; // Default fallback
  };
  
  const blogs = [
    {
      id: '/Whitehouse',
      title: 'WHITE HOUSE',
      thumb: '35+ Capacity ',
      screens: white,
      description: 'Luxurious 6BHK Villa Near Malpe Beach',
      author: 'Udupi city center',
      authorTitle: 'Udupi city center',
      create_at: '14 AUG,21',
      blogSingleImg: blogSingleImg1, 
      comment: '35',
      blClass: 'format-standard-image',
      price: getPriceForCurrentPeriod({
        "January-March": '10,800',
        "April-May": '13,600',
        "June-August": '10,800',
        "September-December 20": '13,600',
        "December 20-31": '19,950',
      }),
    },
    {
      id: '/GardenVilla',
      title: 'GARDEN VILLA ',
      thumb: '20+ Capacity ',
      screens: Garden,
      description: '5 BHK spacious bedrooms and fully furnished',
      author: 'Udupi city center',
      authorTitle: 'Creative Director',
      create_at: '16 AUG,21',
      blogSingleImg: blogSingleImg2, 
      comment: '80',
      blClass: 'format-standard-image',
      price: getPriceForCurrentPeriod({
        "January-March": "9,800",
        "April-May": "12,500",
        "June-August": "9,800",
        "September-December 20": "12,500",
        "December 20-31": "21,950"
      }),
    },
    {
      id: '/CottageHouse',
      title: 'COTTAGE HOUSE',
      thumb: '10+ Capacity ',
      screens: Cottage,
      description: 'Air-conditioned 3-BHK fully furnished villa',
      author: 'Near Udupi (7 km) & Manipal (15 km)',
      authorTitle: 'Art Director',
      create_at: '18 AUG,21',
      blogSingleImg: blogSingleImg3,
      comment: '95',
      blClass: 'format-video',
      price: getPriceForCurrentPeriod({
        "January-March": '5,800',
        "April-May": '7,500',
        "June-August": '5,800',
        "September-December 20": '7,500',
        "December 20-31": '11,900'
      }),
    },
    {
      id: '/TopVilla',
      title: 'HILL TOP VILLA',
      thumb: '12+ Capacity  ',
      screens: HillTop,
      description: '3-BHK Villa with Air Conditioning',
      author: 'Near Udupi (7 km) & Manipal (15 km)',
      authorTitle: 'Art Director',
      create_at: '18 AUG,21',
      blogSingleImg: blogSingleImg3,
      comment: '95',
      blClass: 'format-video',
      price: getPriceForCurrentPeriod({
        "January-March": '6,200',
        "April-May": '7,800',
        "June-August": '6,200',
        "September-December 20": '7,800',
        "December 20-31": '12,500'
      }),
    },
    {
      id: '/SunriseHome',
      title: 'SUNRISE HOME',
      thumb: '8+ Capacity  ',
      screens: Sunrise,
      description: '3-BHK Brick House ',
      author: 'Near Udupi (7 km) & Manipal (15 km)',
      authorTitle: 'Art Director',
      create_at: '18 AUG,21',
      blogSingleImg: blogSingleImg3,
      comment: '95',
      blClass: 'format-video',
      price: getPriceForCurrentPeriod({
        "January-March": '4,800',
        "April-May": '6,500',
        "June-August": '4,800',
        "September-December 20": '6,500',
        "December 20-31": '9,900'
      }),
    },
    {
      id: '/ChaletLabonne',
      title: 'CHALET LA BONNE VIE',
      thumb: '5+ Capacity  ',
      screens: Chalet,
      description: '2-BHK Modern house, Bird sanctuary and Farm.',
      author: 'Near Udupi (7 km) & Manipal (15 km)',
      authorTitle: 'Art Director',
      create_at: '18 AUG,21',
      blogSingleImg: blogSingleImg3,
      comment: '95',
      blClass: 'format-video',
      price: getPriceForCurrentPeriod({
        "January-March": '12,000',
        "April-May": '15,000',
        "June-August": '12,000',
        "September-December 20": '15,000',
        "December 20-31": '19,500'
      }),
    },
    {
      id: '/ViewPoint',
      title: 'VIEWPOINT OASIS',
      thumb: '20+ Capacity  ',
      screens: img1,
      description: 'Jacuzzi, View Point, BBQ Area ',
      author: 'Near Udupi (7 km) & Manipal (15 km)',
      authorTitle: 'Art Director',
      create_at: '18 AUG,21',
      blogSingleImg: blogSingleImg3,
      comment: '95',
      blClass: 'format-video',
      price: getPriceForCurrentPeriod({
        "January-March": "1,000",
      "April-May":  "1,000",
      "June-August":  "1,000",
      "September-December 20": '1,000',
      "December 20-31": '1,000',
      }),
    },
  ];
  
  export default blogs;
  