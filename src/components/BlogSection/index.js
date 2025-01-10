import React from 'react'
import blogs from '../../api/blogs'
import {Link} from 'react-router-dom'
import bShape1 from '../../images/blog/Vector1.png'
import bShape2 from '../../images/blog/Vector2.png'
import SectionTitle from '../SectionTitle'
import Viewpoint from "../../images/allimg/Homestay/Viewpoint.webp";
const BlogSection = (props) => {
    
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(

        <section className="wpo-blog-section section-padding" id="blog">
            <div className="container">
                <SectionTitle subTitle={'Udupi HomeStay'} MainTitle={'Our Homestay'}/>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(0,6).map((blog, Bitem) => (
                            <div className="col col-lg-6 col-md-6 col-12" key={Bitem}>
                                      <Link onClick={ClickHandler} to={`${blog.id}`}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt=""/>
                                        <div className="thumb1">{blog.thumb}</div>
                                        {/* <div className="thumb">Price Per Day:{blog.price}</div> */}
                                        
                                        
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li></li>
                                            <li>{blog.author}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`${blog.id}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
                                        {/* <h5>Price Per Day:{blog.price}</h5> */}
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}


{blogs.slice(6,7).map((blog, Bitem) => (
                            <div className="col col-lg-12 col-md-6 col-12" key={Bitem}>
                                      <Link onClick={ClickHandler} to={`${blog.id}`}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt=""/>
                                        <div className="thumb1">{blog.thumb}</div>
                                        {/* <div className="thumb">Price Per Hour:{blog.price}</div> */}
                                        
                                        
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li></li>
                                            <li>{blog.author}</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`${blog.id}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
                                        {/* <h5>Price Per Day:{blog.price}</h5> */}
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                {/* <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(0,3).map((blog, Bitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={blog.screens} alt=""/>
                                        <div className="thumb">{blog.thumb}</div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li>By <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.author}</Link></li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}




                {/* single  */}
                {/* <div className="wpo-blog-items" >
                            <div className="col col-lg-12 col-md-6 col-12" >
                            <Link  to={`/ViewPoint`}>
                                <div className="wpo-blog-item" >
                                    <div className="wpo-blog-img">
                                        <img src={Viewpoint} alt="" style={{height:'30px'}}/>
                                        <div className="thumb">20+ Capacity</div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <ul>
                                            <li></li>
                                            <li>Near Udupi (7 km) & Manipal (15 km)</li>
                                        </ul>
                                        <h2><Link onClick={ClickHandler} to={`/ViewPoint`}>Viewpoint Oasis</Link></h2>
                                        <p>Jacuzzi, View Point, BBQ Area </p>
                                    </div>
                                </div>
                                </Link>
                            </div>
                </div> */}
                {/* single  */}
            </div>
            <div className="vector-1">
                <img src={bShape1} alt=""/>
            </div>
            <div className="vector-2">
                <img src={bShape2} alt=""/>
            </div>
        </section>
    )
}

export default BlogSection;