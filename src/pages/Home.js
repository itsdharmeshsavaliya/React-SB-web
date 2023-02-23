import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useStateWithCallbackLazy } from 'use-state-with-callback';
// import Carousel from "better-react-carousel";
// import { Carousel } from "react-carousel-minimal";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import FooterPage from "../components/FooterPage";
// import CoreStyles from "../index.css";
const styles = {
    height:"auto"
}
// const itemsLength = Array.from({ length: 5 });

// const items = itemsLength.map((item, index) => {
//     const style = { width: 500 + index * 200 };
//     return (<div className="item" style={style}>{index + 1}</div>);
// });

const Home = () => {
    const [banner,setBanner] = useState([])
    const [service,setService] = useState([])
    const [future,setFuture] = useState([])
    const [gallery,setGallery] = useState([])
    const [client,setClient] = useState([])
    const [award,setAward] = useState([])
    // const [bdata,setBdata] = useState([])
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    // let items;
   

    // const api = async()=>{
    //     await fetch("/api/home/data",{
    //         headers:{
    //             'Content-Type':"application/json",
    //             'Accept':"application/json"
    //         },
    //         method: "POST"
    //         }).then(function(response){
    //             console.log(response);
    //             return response.json()
    //         }).then(async function(myjson){
    //             console.log("myjson:")
    //             console.log(myjson)
    //             setService(myjson.service)
    //             setFuture(myjson.future)
    //             setGallery(myjson.gallery)
    //             setClient(myjson.client)
    //             setAward(myjson.award)
    //             //console.log(myjson.banner)
    //             setBanner(myjson.banner,()=>{
    //                 myjson.banner.map((value)=>{
    //                 dataa.push({image:value.image})    
    //                 })
    //                 console.log(dataa)
    //                 setBdata(dataa)
    //             })
                
    //         });
    // }
    useEffect(()=>{  
        // api();

        fetch("/api/home/data",{
            headers:{
                'Content-Type':"application/json",
                'Accept':"application/json"
            },
            method: "POST"
            }).then(function(response){
                console.log(response);
                return response.json()
            }).then(async function(myjson){
                console.log("myjson:")
                console.log(myjson)
                setService(myjson.service)
                setFuture(myjson.future)
                setGallery(myjson.gallery)
                setClient(myjson.client)
                setAward(myjson.award)
                //console.log(myjson.banner)
                setBanner(myjson.banner)
                // setBanner(myjson.banner, async ()=>{
                //     let dataa = await myjson.banner.map((value)=>{
                //         return {image:value.image};    
                //     })
                //     console.log(dataa)
                //     setBdata(dataa)
                // })
                
            }); 
            
    },[setBanner])
    
//     const data = [
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
//       caption: `<div>
//                   San Francisco
//                   <br/>
//                   Next line
//                 </div>`
//     },
//     {
//       image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
//       caption: "Darjeeling"
//     },
//     {
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
//       caption: "San Francisco"
//     },
//     {
//       image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
//       caption: "Darjeeling"
//     },
//     {
//       image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
//       caption: "San Francisco"
//     },
//     {
//       image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
//       caption: "Scotland"
//     },
//     {
//       image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
//       caption: "Darjeeling"
//     }
//   ];

    
    return (
        <>
            
            <div className="wrapper">
            <div className="content-resizer" data-target="home" id="home">
            <div className="page-overlay"></div>
            <div id="header"></div>
{/*             
            {  
                    banner.map((value,pos)=>{
                        //return (value.image)
                        //setBdata(value.image)
                        dataa.push({image:value.image})
                        console.log(dataa)
                       }) 
            }     
             */}
                   
           
            {/* {console.log(dataa)} */}
            
            {/* <Carousel data={bdata}
            time={2000}
            width="850px"
            height="500px"
            radius="10px"
            slideNumber={true}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
            /> */}
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                buttons={false}
                bullets={false}
                // cssModule={CoreStyles}
                // className={[awssld__container > figure, awssld__content, awssld__box]}
                
                >
                {
                 
                        banner.map((value,pos)=>{
                            return(
                                <div className="item" style={styles} key={pos}>
                                    <img src={value.image} alt="" />
                                </div>
                            )
                        })
                    }
            </AutoplaySlider>
            
            {/* <Carousel breakpoints={[
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      }
                }
            ]}  dots={true}
                showSides={true}
                sidesOpacity={0.5}
                sideSize={0.1}
                slidesToScroll={4}
                slidesToShow={4}
                scrollOnDevice={true}>
                    {
                        banner.map((value,pos)=>{
                            return(
                                <Carousel.Item>
                                <div className="item" key={pos}>
                                    <img src={value.image} alt="" />
                                </div>
                                </Carousel.Item>
                            )
                        })
                    }
            </Carousel> */}
            {/* <div className="home-slider-section">
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
            </div> */}
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
                                                        <h2 className="service_name text-center mb-3 text-decoration-none">
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
                                                <>
                                                    <div className="col-3" key={pos}>
                                                        <div className="future_num_box">
                                                            <div className="future_number">{value.years_of_experience}+</div>
                                                            <div className="future_text">years of experience</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-3"> 
                                                        <div className="future_num_box">
                                                            <div className="future_number">{value.websites_delivered}+</div>
                                                            <div className="future_text">websites delivered</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-3">
                                                        <div className="future_num_box">
                                                            <div className="future_number">{value.countries_served}+</div>
                                                            <div className="future_text">countries served</div>
                                                        </div>
                                                    </div> 
                                                    <div className="col-3">
                                                        <div className="future_num_box">
                                                            <div className="future_number">{value.satisfied_clients}+</div>
                                                            <div className="future_text">satisfied clients</div>
                                                        </div>
                                                    </div>
                                                 </>   
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
                    
                <AliceCarousel
                    mouseTracking
                    items={
                            gallery.map((val,pos)=>{                     
                                    return(                            
                                        <div className="item mt-5" style =  {{ width: 225 }} key={pos}>
                                            <img src={val.image} alt="" />
                                        </div>
                                    )
                                })
                            }
                    autoPlay
                    autoWidth
                    infinite
                    autoPlayInterval={3000}
                    disableDotsControls
                    disableButtonsControls
                />
                    {/* <div className="section trusted_sec pt-5 pb-5">
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
                    </div> */}
                    
                    <div className="section testimonials_sec">
                        <div className="container">
                            <div className="section-heading crumina-heading mb-3">
                                <h1 className="title">Our Clients Say</h1>
                                <div className="heading-decoration">
                                    <span className="first blue" />
                                    <span className="second blue" />
                                </div>
                            </div>
                            <AliceCarousel
                    mouseTracking
                    items={
                                client.map((value,pos)=>{
                                    return(
                                            <div className="item" style = {{ width: 394,border: "1px solid #ccc",margin:"0 -10px"}} key={pos} >
                                                <i className="testimonial_icon">
                                                    <img src={value.image} alt="" />
                                                </i>
                                                <p className="testimonials-text" style={{textAlign:"center",lineHeight:"2.1",padding:"0px 15px",fontSize:"14px",fontWeight:"500"}}>
                                                    {value.description}
                                                </p>
                                                <div className="user-name" style={{textAlign:"center", backgroundColor: "#ececec", padding:"20px 0px"}}>
                                                    <b>{value.name}</b>
                                                    <br />
                                                    {value.city}
                                                </div>
                                            </div>
                                    )
                                })
                            }
                   
                    autoWidth
                    disableDotsControls={false}
                    disableButtonsControls
                />
                            {/* <div className="testimonials-slider owl-carousel owl-theme text-center">
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
                            </div> */}
                        </div>
                    </div>
                    <AliceCarousel
                    mouseTracking
                    items={
                        award.map((value,pos)=>{
                            return(
                                <div className="item mb-5" style =  {{ width: 225 }} key={pos}>
                                    <img src={value.image} alt="" />
                                </div>
                            )
                        })
                    }
                    autoPlay
                    autoWidth
                    infinite
                    autoPlayInterval={3000}
                    disableDotsControls
                    disableButtonsControls
                />
                    {/* <div className="section pt-4 pb-4 top-border">
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
                    </div> */}
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