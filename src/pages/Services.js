
import FooterPage from '../components/FooterPage';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';


const Services = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('/api/services/data',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            method:'POST'
        }).then(function(response){
            console.log(response);
            return response.json()
        }).then(function(myjson){
            setServices(myjson)
            console.log(myjson)
        });
    },[])

    return (

        <>
            <div className="wrapper">
                <div className="page-overlay" />
                <div id="header" />
                {/* end header */}
                <div className="inner-page-header">
                    <img className="img-full" src="images/services02.jpg" alt="" />
                    <div className="banner-title d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-lg-12">Services</div>
                            <div className="col-lg-12 sub-title">
                                Customised to suit your needs.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_box_w">
                    <div className="content-resizer">
                        <div className="container">
                            <div className="row">
                                {
                                    services.map((value,pos)=>{
                                        // let types;
                                        return(
                                                <div className="col-lg-6 col-md-6 col-sm-12" key={pos}>
                                                    <div className="services_w">
                                                        <div className=" services_box">
                                                            <div className="service_icon">
                                                                <img src={value.image} alt="" />
                                                            </div>
                                                            <div className="section-heading crumina-heading text-center">
                                                                <h1 className="title">{value.name}</h1>
                                                                <div className="heading-decoration">
                                                                    <span className="first blue" />
                                                                    <span className="second blue" />
                                                                </div>
                                                            </div>
                                                            <p className="gentext drak-gry text-center">
                                                                {value.description}
                                                            </p>
                                                        </div>
                                                        <div className="services_overlow">
                                                            <h1 className="lg-title white text-center pt-4">{value.name}</h1>
                                                            <div className="service_list text-decoration-none">
                                                                <ul>
                                                                    {
                                                                        value.types.map((val,pos)=>
                                                                                <li key={pos}><Link to={val.link} className="text-decoration-none">{val.title}</Link></li>
                                                                            )
                                                                    }
                                                                </ul>
                                                            </div>
                                                            <div className="text-center mt-5">
                                                                <div className="white-btn"><Link to="/ServiceDetails">View More</Link></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        )
                                    })
                                }
                               
                                {/* <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/01.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Web Development</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">
                                                Web Development
                                            </h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">ASP.NET Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">WordPress Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Magento Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Web API Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">OpenCart Development</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/02.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Mobile Apps</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">Mobile Apps</h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">Android Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">iOS Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">iPad Development</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/03.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Digital Marketing</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">
                                                Digital Marketing
                                            </h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">SEO Services</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">PPC Advertising</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Social Media Marketing</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/04.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Branding</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">Branding</h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">Logo Design</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Banner Design</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Brochure Design</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/05.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Ecommerce Solutions</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">
                                                Ecommerce Solutions
                                            </h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">ASP.NET Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">WordPress Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Magento Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Web API Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">OpenCart Development</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/06.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Web Products</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">
                                                Web Development
                                            </h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">ASP.NET Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">WordPress Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Magento Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Web API Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">OpenCart Development</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="services_w">
                                        <div className=" services_box">
                                            <div className="service_icon">
                                                <img src="images/services/07.jpg" alt="" />
                                            </div>
                                            <div className="section-heading crumina-heading text-center">
                                                <h1 className="title">Website Management</h1>
                                                <div className="heading-decoration">
                                                    <span className="first blue" />
                                                    <span className="second blue" />
                                                </div>
                                            </div>
                                            <p className="gentext drak-gry text-center">
                                                The brand name is significant for any venture to be
                                                successful. How individuals look at your product when they
                                                come across it surprisingly measures a great deal of
                                                importance. For the most part consumers judge the brand by its
                                                designing. If a small thing like logo can have that momentous
                                                impact, you can envision the importance of your website.
                                            </p>
                                        </div>
                                        <div className="services_overlow">
                                            <h1 className="lg-title white text-center pt-4">
                                                Web Development
                                            </h1>
                                            <div className="service_list">
                                                <ul>
                                                    <li>
                                                        <Link to="/ServiceDetails">ASP.NET Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">WordPress Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Magento Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">Web API Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/ServiceDetails">OpenCart Development</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-5">
                                                <div className="white-btn">
                                                    <Link to="/ServiceDetails">View More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer" />
                {/* end footer*/}
            </div>
            <FooterPage/>

        </>
    )


}

export default Services;