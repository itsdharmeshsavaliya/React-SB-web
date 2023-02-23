import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";
import "../index.css"

const Home = () => {
    const [banner,setBanner] = useState([])
    const [service,setService] = useState([])
    const [future,setFuture] = useState([])
    const [gallery,setGallery] = useState([])
    const [client,setClient] = useState([])
    const [award,setAward] = useState([])
    useEffect(()=>{
        // fetch(
        //     "/api/service/data")
        //                 .then((res) => res.json())
        //                 .then((json) => {
        //                     setService(json)
        //                 })

        fetch("/api/home/data",{
            headers:{
                'Content-Type':"application/json",
                'Accept':"application/json"
            },
            method: "POST"
            }).then(function(response){
                console.log(response);
                return response.json()
            }).then(function(myjson){
                console.log(myjson)
                setService(myjson.service)
                setFuture(myjson.future)
                setGallery(myjson.gallery)
                setClient(myjson.client)
                setAward(myjson.award)
                setBanner(myjson.banner)

            });
            
    },[])

    return (
        <>
            
            <div className="wrapper">
            <div className="content-resizer" data-target="home" id="home">
            <div className="page-overlay"></div>
            <div id="header"></div>
            <div className="home-slider-section">
                <div className="home-slider owl-carousel owl-theme">
                    {
                        banner.map((value,pos)=>{
                            return(
                                <div className="item" key={pos}>
                                    <img src={value.image} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

                <div data-target="aboutus" id="aboutus" className="aboutus_sec">
                    <div className="content-resizer">
                        <div className="container mascot_bg">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <img src="images/cycle-3.gif" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <h1 className="mrblue">Mr. Blue</h1>
                                    <h2 className="mascot_text">OUR MASCOT</h2>
                                    <p className="gentext text-center mt-4">
                                        Being known as the color of reliability, the use of Blue color in
                                        our mascot was indeed a rigorous brainstorming session among the
                                        creative nerds and that's how the concept of Mr. Blue was
                                        unfolded. A dynamic and vibrant male bug with antennas on the
                                        head, Mr. Blue, is SetBlue's official mascot.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_box_w">
                    <div className="container">
                        <div className="row">
                            {
                                service.map((value,pos)=>{
                                    return(
                                                <div className="col-lg-3 col-md-6 col-6" key={pos}>
                                                <div className="a_box">
                                                    <Link to="/Services">
                                                        <i className="services_sprite">
                                                            <img src={value.image} alt="" />
                                                        </i>
                                                        <h2 className="service_name  text-center mb-3 ">
                                                            {value.title}
                                                        </h2>
                                                    </Link>
                                                </div>
                                            </div>  
                                         )
                                    })
                            }    
                        </div>
                        
                    </div>
                </div>
                <div className="future_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <img src="images/future_img.jpg" className="img-fluid" alt="" />
                            </div>
                            <div className="futere_w">
                                <div className="row">
                                    {
                                        future.map((value,pos)=>{
                                            return(
                                                <div className="col-3" key={pos}>
                                                    <div className="future_num_box">
                                                        <div className="future_number">{value.future_no}</div>
                                                        <div className="future_text">{value.future_text}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Portfolio_sec">
                    <div className="container">
                        <div className="section-heading crumina-heading">
                            <h1 className="title">Portfolio</h1>
                            <div className="heading-decoration">
                                <span className="first blue" />
                                <span className="second blue" />
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-6">
                                <div className="home_portfolio_box">
                                    <img src="images/work01.jpg" alt="" />
                                    <div className="homep_overflow">
                                        <h3 className="sm-title">Real Estate Corporate Website</h3>
                                        <div className="readmore-btn mt-3">
                                            <Link to="#">
                                                Visit Site
                                                <i className="blog-rightarrow sprite" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="home_portfolio_box work_box02">
                                    <img src="images/court01.jpg" alt="" />
                                    <div className="homep_overflow">
                                        <h3 className="sm-title">Online Food Delivery</h3>
                                        <div className="readmore-btn mt-3">
                                            <Link to="#">
                                                Visit Site
                                                <i className="blog-rightarrow sprite" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-12">
                                <div className="row no-gutter">
                                    <div className="col-lg-12 col-6">
                                        <div className="home_portfolio_box">
                                            <img src="images/himanee01.jpg" alt="" />
                                            <div className="homep_overflow">
                                                <h3 className="sm-title">E-commerce Store</h3>
                                                <div className="readmore-btn mt-3">
                                                    <Link to="#">
                                                        Visit Site
                                                        <i className="blog-rightarrow sprite" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-6">
                                        <div className="home_portfolio_box">
                                            <img src="images/big01.jpg" alt="" />
                                            <div className="homep_overflow">
                                                <h3 className="sm-title">Jewellery Showroom</h3>
                                                <div className="readmore-btn mt-3">
                                                    <Link to="#">
                                                        Visit Site
                                                        <i className="blog-rightarrow sprite" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div data-target="gallery" id="gallery">
                    <div className="section trusted_sec pt-5 pb-5">
                        <div className="container">
                            <div className="trusted-slider owl-carousel owl-theme">
                            {
                                gallery.map((val,pos)=>{                     
                                    return(                            
                                        <div className="item" key={pos}>
                                            <img src={val.image} alt="" />
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                    <div className="section testimonials_sec">
                        <div className="container">
                            <div className="section-heading crumina-heading mb-3">
                                <h1 className="title">Our Clients Say</h1>
                                <div className="heading-decoration">
                                    <span className="first blue" />
                                    <span className="second blue" />
                                </div>
                            </div>
                            <div className="testimonials-slider owl-carousel owl-theme text-center">
                                {
                                    client.map((value,pos)=>{
                                        return(
                                                <div className="item" key={pos}>
                                                    <i className="testimonial_icon">
                                                        <img src={value.image} alt="" />
                                                    </i>
                                                    <p className="testimonials-text">
                                                        {value.description}
                                                    </p>
                                                    <div className="user-name">
                                                        <b>{value.name}</b>
                                                        <br />
                                                        {value.city}
                                                    </div>
                                                </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="section pt-4 pb-4 top-border">
                        <div className="container">
                            <div className="awards_logo owl-carousel owl-theme">
                                {
                                    award.map((value,pos)=>{
                                        return(
                                            <div className="item" key={pos}>
                                                <img src={value.image} alt="" />
                                            </div>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog_section">
                    <div className="container">
                        <div className="section-heading crumina-heading">
                            <h1 className="title white">Blog &amp; Feeds</h1>
                            <div className="heading-decoration">
                                <span className="first white" />
                                <span className="second white" />
                            </div>
                            <div className="white blog-text">
                                Explore the latest trends and find our updates on all you need to know
                                about what is happening in the world of web and technology.
                            </div>
                        </div>
                        <div className="blogp01">
                            <div className="row">
                                <div className="col-lg-6 col-6">
                                    <div className="white_bg">
                                        <div>
                                            <img src="images/blog01.jpg" className="img-full" alt="" />
                                        </div>
                                        <div className="blog-padding">
                                            <div className="blog-sort">By Setblue</div>
                                            <div className="blog-title">
                                                Understanding the Truth about Today’s Customers
                                            </div>
                                            <div className="readmore-btn">
                                                <Link to="#">
                                                    Read More <i className="blog-rightarrow sprite" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className="white_bg">
                                        <div>
                                            <img src="images/blog02.jpg" className="img-full" alt="" />
                                        </div>
                                        <div className="blog-padding">
                                            <div className="blog-sort">By Setblue</div>
                                            <div className="blog-title">
                                                Understanding the Truth about Today’s Customers
                                            </div>
                                            <div className="readmore-btn">
                                                <Link to="#">
                                                    Read More <i className="blog-rightarrow sprite" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blogp02">
                            <img className="img-full" src="images/blog03.jpg" alt="" />
                        </div>
                        <div className="clearfix" />
                        <div className="text-center mt-5">
                            <div className="white-btn">
                                <Link to="#">More On Our Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-target="footersec" id="footersec">
                    <div id="footer" />
                </div>
            </div>
            <div style={{ display: "none" }} id="back-top" className="goTop text-center">
                <Link data-anchor="home" to="javascript;">
                    <i className="sprite up-arrow" />
                    <span className="d-block">Top</span>
                </Link>
            </div>
            <FooterPage />
            

        </>

    )


}

export default Home;