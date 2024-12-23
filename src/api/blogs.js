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


const blogs = [
    {
        id: '/Whitehouse',
        title: 'WHITE HOUSE',
        thumb:'30+ Capacity ',
        screens: white,
        description: 'Luxurious 6BHK Villa Near Malpe Beach',
        author: 'Udupi city center',
        authorTitle:'Udupi city center',
        create_at: '14 AUG,21',
        blogSingleImg:blogSingleImg1, 
        comment:'35',
        blClass:'format-standard-image',
    },
    {
        id: '/GardenVilla',
        title: 'GARDEN VILLA ',
        thumb:'25+ Capacity ',
        screens: Garden,
        description: '5 BHK spacious bedrooms and fully furnished',
        author: 'Udupi city center',
        authorTitle:'Creative Director',
        create_at: '16 AUG,21',
        blogSingleImg:blogSingleImg2, 
        comment:'80',
        blClass:'format-standard-image',
    },
    {
        id: '/CottageHouse',
        title: 'COTTAGE HOUSE',
        thumb:' 10+ Capacity ',
        screens: Cottage,
        description: 'Air-conditioned 3-BHK fully furnished villa',
        author: 'Near Udupi (7 km) & Manipal (15 km)',
        authorTitle:'Art Director',
        create_at: '18 AUG,21',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '/TopVilla',
        title: 'HILL TOP VILLA',
        thumb:' 10+ Capacity  ',
        screens: HillTop,
        description: '3-BHK Villa with Air Conditioning',
        author: 'Near Udupi (7 km) & Manipal (15 km)',
        authorTitle:'Art Director',
        create_at: '18 AUG,21',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '/SunriseHome',
        title: 'SUNRISE HOME',
        thumb:' 10+ Capacity  ',
        screens: Sunrise,
        description: '3-BHK Brick House ',
        author: 'Near Udupi (7 km) & Manipal (15 km)',
        authorTitle:'Art Director',
        create_at: '18 AUG,21',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
    {
        id: '/ChaletLabonne',
        title: 'Chalet La Bonne Vie',
        thumb:' 10+ Capacity  ',
        screens: Chalet,
        description: '2-BHK Modern house, Bird sactuary and Farm.',
        author: 'Near Udupi (7 km) & Manipal (15 km)',
        authorTitle:'Art Director',
        create_at: '18 AUG,21',
        blogSingleImg:blogSingleImg3,
        comment:'95',
        blClass:'format-video',
    },
];
export default blogs;