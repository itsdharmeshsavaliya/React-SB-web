import React from "react";
// import { Link } from "react-router-dom";
import {

    Box,
    // Link,
    // Table,
    // TableBody,
    // TableHead,
    // TableRow,
    // TableCell,
    // Button,


} from '@mui/material';
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
const Resume = () => {
    const [resume,setResume] = useState([])
    const params = useLocation().search;
    console.log(params)

    useEffect(()=>{
        let id = new URLSearchParams(params).get('id')
        console.log(id)
        fetch(`/api/userprofile/${id}`,{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            method:"POST"
        }).then(function(response){
            return response.json()
        }).then(function(myjson){
            setResume(myjson)
            console.log(myjson)
        })
    },[params])

    return (
        <>
            <Box className="wrapper">
                <Box className="profileTalent-pg">

                    {/* Banner START */}
                    <section className="banner">
                        <Box className="banner-top">
                            <Box className="container">
                                <Box className="row">
                                    <Box className="col-sm-4">
                                        <Box className="userPhoto">
                                            <figure>
                                                <img src={resume.image ? resume.image:"/images/resume/full1.jpg"} className="" alt="" />
                                            </figure>
                                        </Box>
                                    </Box>
                                    <Box className="col-sm-8">
                                        <Box className="userInfo">
                                            <h1>{resume.name}</h1>
                                            <Box className="post">{resume.skill}</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="banner-bottom">
                            <Box className="container">
                                <Box className="userSub-info">
                                    <ul>
                                        <li>
                                            Origin <strong>India</strong>
                                        </li>
                                        <li>
                                            Experience <strong>6 Years</strong>
                                        </li>
                                        <li>
                                            Availability <strong>Full-Time</strong>
                                        </li>
                                    </ul>
                                </Box>
                            </Box>
                        </Box>
                    </section>
                    {/* Banner START */}
                    
                    {/* Expertise START */}
                    {resume.expertise_section === true ? 
                            <section className="expertise-main">
                            <Box className="container">
                                <Box className="row">
                                    <Box className="col-sm-4 leftPart">
                                        <h3 className="left-title">Expertise</h3>
                                    </Box>
                                    <Box className="col-sm-8 rightPart">
                                        <Box className="expt-list">
                                            <ul>
                                                {resume.exp_technology.map((value,pos)=>{
                                                    return(
                                                        <li key={pos}>
                                                            <Box className="item">
                                                                <figure className="icon">
                                                                    <img
                                                                        src={value.technology_id.logo}
                                                                        alt=""
                                                                    />
                                                                </figure>
                                                                <Box className="skill-name">{value.technology_id.title}</Box>
                                                                <Box className="exp-num">{value.exp_year} Years</Box>
                                                            </Box>
                                                        </li>
                                                    )
                                                })}
                                                
                                                {/* <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/7s7SheYpnH0pIBo89PetlDa6Zht6wrFDbIfKyAOY.png"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">PHP</Box>
                                                        <Box className="exp-num">8 Years</Box>
                                                    </Box>
                                                </li>
                                                <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/VFaFfl1kULGK8pyvmbRuwf3STxOBG8fdwe6LaWRO.png"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">CSS</Box>
                                                        <Box className="exp-num">8 Years</Box>
                                                    </Box>
                                                </li>
                                                <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/1623997777-WordPress-Tutorial.png"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">WordPress</Box>
                                                        <Box className="exp-num">7 Years</Box>
                                                    </Box>
                                                </li>
                                                <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/uHOSaWVrsPccE6f5n43FB5j2mtQHdvj4PDL9KewS.png"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">JOOMLA</Box>
                                                        <Box className="exp-num">4 Years</Box>
                                                    </Box>
                                                </li>
                                                <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/1623997778-magento-logo.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">Magento</Box>
                                                        <Box className="exp-num">3 Years</Box>
                                                    </Box>
                                                </li>
                                                <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/1625038228-laravel.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">Laravel</Box>
                                                        <Box className="exp-num">3 Years</Box>
                                                    </Box>
                                                </li>
                                                <li>
                                                    <Box className="item">
                                                        <figure className="icon">
                                                            <img
                                                                src="https://profiles.uplers.com/img/proficiency/technical-proficiency_placeholder.png"
                                                                alt=""
                                                            />
                                                        </figure>
                                                        <Box className="skill-name">React</Box>
                                                        <Box className="exp-num">2 Years</Box>
                                                    </Box>
                                                </li> */}
                                            </ul>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            </section>
                            :
                            null
                    }
                    {/* Expertise END */}
                    {/* About section START */}
                    {resume.certification_section === true ?
                    <section className="about">
                        <Box className="container">
                            <Box className="row">
                                <Box
                                    className="col-sm-4 leftPart mob-Mode animated-highlight"
                                    id="certifications"
                                >
                                    <Box className="mob-title">
                                        <h3 className="left-title">CERTIFICATIONS</h3>
                                    </Box>

                                    <Box className="mob-content">
                                        <Box className="cer-iconBox ">
                                            <figure>
                                                <img src="https://profiles.uplers.com/img/certification/GOlkOg93GpEqSwp1S1Auv783SL8mKBa6dM5tpXF3.png" alt="" />
                                            </figure>
                                            <h5>Google ads - Search Certification</h5>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="col-sm-8 rightPart">
                                    <h3 className="main-title">ABOUT ME</h3>
                                    <p>
                                        {resume.certi_about}
                                    </p>
                                    <Box className="keys animated-highlight" id="qualities">
                                        <h4 className="sub-title">KEY QUALITIES</h4>
                                        <ul>
                                            {resume.certi_key_qualities.map((value,pos)=>{
                                                return(
                                                    <li key={pos}>{value}</li>
                                                )
                                            })}
                                            
                                            {/* <li>Time Management</li>
                                            <li>Proactive</li>
                                            <li>Team Player</li>
                                            <li>Quick Learner</li>
                                            <li>Problem Solver </li>
                                            <li>Positive Approach </li>
                                            <li>Adaptable</li>
                                            <li>Attention-to-Detail</li> */}
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </section>
                    :
                    null
                    }
                    
                    {/* About section END */}
                    {/* Testimonials START */}
                    <section className="testimonials animated-highlight" id="testimonial">
                        <Box className="container">
                            <blockquote>
                                Rahul worked with me in building/coding advanced websites and working
                                with big APIs. He is a person who has plenty of motivation and
                                discipline. He is consciously proactive at getting the full
                                involvement of all other team members to derive the best possible
                                results
                            </blockquote>
                            <Box className="postby">- Client Testimonial</Box>
                        </Box>
                    </section>
                    {/* Testimonials END */}
                    {/* Experience section START */}
                    {resume.education_section === true ?
                        <section className="experience">
                            <Box className="container ">
                                <Box className="row">
                                    <Box
                                        className="col-sm-4 leftPart mob-Mode animated-highlight"
                                        id="education"
                                    >
                                        <Box className="mob-title">
                                            <h3 className="left-title">Education</h3>
                                        </Box>
                                        <Box className="mob-content">
                                            {
                                                resume.education.map((value,pos)=>{
                                                    return(
                                                        <Box className="commonIcon-box" key={pos}>
                                                            <figure>
                                                                <img
                                                                    src="https://profiles.uplers.com/frontend/template5/images/education-icon.svg"
                                                                    alt="Education"
                                                                />
                                                            </figure>
                                                            <h6>{value.edu_year}</h6>
                                                            <h5>{value.edu_degree}</h5>
                                                            <p>
                                                                {value.edu_collage_name}
                                                            </p>
                                                        </Box>
                                                    )
                                                })
                                            }
                                            
                                            {/* <Box className="commonIcon-box">
                                                <figure>
                                                    <img
                                                        src="https://profiles.uplers.com/frontend/template5/images/education-icon.svg"
                                                        alt="Education"
                                                    />
                                                </figure>
                                                <h6>2008</h6>
                                                <h5>XII</h5>
                                                <p>Vatsalya Public School, Mandsaur, MP</p>
                                            </Box> */}
                                            {/* <Box className="commonIcon-box">
                                                <figure>
                                                    <img
                                                        src="https://profiles.uplers.com/frontend/template5/images/education-icon.svg"
                                                        alt="Education"
                                                    />
                                                </figure>
                                                <h6>2006</h6>
                                                <h5>X</h5>
                                                <p>Kendriya Vidyalaya, Mandsaur, MP</p>
                                            </Box> */}
                                        </Box>
                                    </Box>
                                    <Box
                                        className="col-sm-8 rightPart animated-highlight"
                                        id="experience"
                                    >
                                        <h3 className="main-title">PROFESSIONAL EXPERIENCE</h3>
                                        <Box className="desc-proBox">
                                            {/* <Box className="top-sub-title">(Jul 2020 to Till Date)</Box>
                                            <h5>
                                                Full-stack Freelance Developer at{" "}
                                                <span className="">EWM, Netherlands</span>
                                            </h5> */}
                                            <ul>
                                                <li>
                                                   {resume.edu_professional_experience}
                                                </li>
                                                {/* <li>
                                                    Worked on creating PWA using Gatsby JS with GraphQL and React
                                                    Jamstack using WordPress to source data
                                                </li>
                                                <li>Worked on CI/CD with GitHub + Netlify</li> */}
                                            </ul>
                                        </Box>
                                        {/* <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Jun 2019 to Jun 2020)</Box>
                                            <h5>
                                                Full-stack Developer at{" "}
                                                <span className="">Change.org, India</span>
                                            </h5>
                                            <ul>
                                                <li>
                                                    Communicated with clients to understand their requirements
                                                </li>
                                                <li>
                                                    Developed custom themes and plugins for WordPress-powered
                                                    crowdfunding website
                                                </li>
                                                <li>
                                                    The created custom payment gateway plugin for the
                                                    WooCommerce-powered Donation platform
                                                </li>
                                                <li>Worked on integration with MixPanel for Data Analytics</li>
                                            </ul>
                                        </Box>
                                        <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Jan 2018 to Apr 2019)</Box>
                                            <h5>
                                                Web Technologist at{" "}
                                                <span className="">Left Right Mind, India.</span>
                                            </h5>
                                            <ul>
                                                <li>
                                                    Served as the primary contact for clients, gathering
                                                    requirements and converting them into deliverables using SME
                                                    knowledge
                                                </li>
                                                <li>
                                                    Designed and implemented PHP web application and integrated it
                                                    with Angular SPA, streamlining high server traffic resources
                                                </li>
                                                <li>
                                                    Successfully installed Linux servers and virtual environments
                                                    using Docker, AWS, etc
                                                </li>
                                                <li>Worked on React Js and GitLab</li>
                                            </ul>
                                        </Box>
                                        <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Dec 2013 to Nov 2017)</Box>
                                            <h5>
                                                Senior Web Developer at{" "}
                                                <span className="">Europe Web Media, Netherlands</span>
                                            </h5>
                                            <ul>
                                                <li>
                                                    Served as the primary contact for client service teams for
                                                    several different projects
                                                </li>
                                                <li>
                                                    Successfully created backends utilizing LAMP &amp; LEMP stack
                                                    Ubuntu, Apache/Nginx, MySQL, PHP
                                                </li>
                                                <li>
                                                    Provided leadership as subject matter expert SME on hosting
                                                    issues, payment gateways troubleshooting, server management
                                                    &amp; code optimizations
                                                </li>
                                            </ul>
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Box>
                        </section>
                        :
                        null
                    }
                    
                    {/* Experience section END */}
                    {/* Major Projects START */}
                    {resume.achievements_section === true ? 
                        <section className="majorProjects">
                        <Box className="container">
                            <Box className="row">
                                <Box
                                    className="col-sm-4 leftPart mob-Mode animated-highlight"
                                    id="achievements"
                                >
                                    <Box className="mob-title">
                                        <h3 className="left-title">ACHIEVEMENTS</h3>
                                    </Box>
                                    <Box className="mob-content">
                                        {resume.achievements_award.map((value,pos)=>{
                                            return(
                                                <Box className="commonIcon-box" key={pos}>
                                                    <figure>
                                                        <img
                                                            src="https://profiles.uplers.com/frontend/template5/images/achivement-icon.svg"
                                                            alt="Achivement"
                                                        />
                                                    </figure>
                                                    <h5>{value.achi_award}</h5>
                                                    <p>
                                                        {value.achi_description}
                                                    </p>
                                                </Box>
                                            )
                                        })}
                                        {/* <Box className="commonIcon-box">
                                            <figure>
                                                <img
                                                    src="https://profiles.uplers.com/frontend/template5/images/achivement-icon.svg"
                                                    alt="Achivement"
                                                />
                                            </figure>
                                            <h5>Award</h5>
                                            <p>
                                                He has worked on more than 50 different projects, handling key
                                                roles in different capacities
                                            </p>
                                        </Box> */}
                                    </Box>
                                </Box>
                                <Box
                                    className="col-sm-8 rightPart mob-Mode animated-highlight"
                                    id="major_projects"
                                >
                                    <Box className="mob-title">
                                        <h3 className="main-title">MAJOR PROJECTS</h3>
                                    </Box>
                                    <Box className="mob-content">
                                        <Box className="desc-proBox">
                                            {/* <Box className="top-sub-title">(Nov 2019 to Jun 2020)</Box>
                                            <h5>Debeerze</h5> */}
                                            <ul>
                                                <li>{resume.achi_projects}</li>
                                                {/* <li>
                                                    Created a booking website for De Beerze - a Café + Hotel
                                                </li>
                                                <li>
                                                    Helped the team in implementing a complex PSD into a
                                                    well-built, fully responsive
                                                </li>
                                                <li>
                                                    WordPress theme and integrated the booking form with the
                                                    website
                                                </li>
                                                <li>
                                                    <strong>Major skills:</strong> PHP, MySQL, WordPress
                                                </li> */}
                                            </ul>
                                        </Box>
                                        {/* <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Jan 2018 to Apr 2019)</Box>
                                            <h5>ShriramLife</h5>
                                            <ul>
                                                <li>Worked as a full-stack web technologist</li>
                                                <li>
                                                    Implemented end-to-end, omnichannel solution for improving
                                                    sales of life insurance policies of ShriramLife on both
                                                    digital and physical touchpoints
                                                </li>
                                                <li>
                                                    Worked on Zeplin to WP Theme conversion, custom API
                                                    endpoints created to fetch and retrieve data from the Java
                                                    Spring Boot backend
                                                </li>
                                                <li>
                                                    Implemented WordPress page interactions with Angular Single
                                                    Page Application for online plans journey
                                                </li>
                                                <li>
                                                    <strong>Major skills:</strong> PHP, MySQL, Angular,
                                                    WordPress, React Js
                                                </li>
                                            </ul>
                                        </Box>
                                        <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Mar 2017 to May 2017)</Box>
                                            <h5>Bar-le-duc</h5>
                                            <ul>
                                                <li>Worked as a Senior Web Developer</li>
                                                <li>
                                                    Created an online presence for Netherland one of the biggest
                                                    packaged drinking water brands: Bar-Le-Duc and made it
                                                    multilingual DE &amp; FR
                                                </li>
                                                <li>
                                                    Implemented crafted PSD design into a WordPress Theme and
                                                    made it multilingual using WPML
                                                </li>
                                                <li>
                                                    <strong>Major skills:</strong> PHP, MySQL, WordPress, WPML
                                                </li>
                                            </ul>
                                        </Box>
                                        <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Oct 2016 to Feb 2017)</Box>
                                            <h5>Urbansurvival</h5>
                                            <ul>
                                                <li>Worked as a Full-stack Web Developer</li>
                                                <li>
                                                    Created an online identity and Webshop for EU's most trusted
                                                    Adventure and Tactical Gear supplier for police, army,
                                                    government, and adventurers
                                                </li>
                                                <li>
                                                    Created a multisite webshop for adventure and tactical gear
                                                    suppliers
                                                </li>
                                                <li>
                                                    Manually created dark-themed WooCommerce pages to match the
                                                    website theme
                                                </li>
                                                <li>
                                                    <strong>Major skills:</strong> PHP, MySQL, WordPress.
                                                </li>
                                            </ul>
                                        </Box>
                                        <Box className="desc-proBox">
                                            <Box className="top-sub-title">(Aug 2014 to Sep 2016)</Box>
                                            <h5>Bedrukte-tape</h5>
                                            <ul>
                                                <li>Worked as a Senior Web Developer</li>
                                                <li>
                                                    Implemented a complex quotation website for Europe's largest
                                                    packaging tape manufacturer: Moonen Packaging
                                                </li>
                                                <li>
                                                    The project was implemented in two phases: Magento &amp;
                                                    WordPress with multilingual support for three languages
                                                </li>
                                                <li>
                                                    <strong>Major skills:</strong> PHP, MySQL, Magento,
                                                    WooCommerce
                                                </li>
                                            </ul>
                                        </Box> */}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        </section>
                        :
                        null
                    }
                    
                    {/* Major Projects END */}
                    {/* App&Tools section START */}
                    {resume.interests_section === true ?
                        <section className="app-tools dark-mob-bg">
                        <Box className="container">
                            <Box className="row">
                                <Box
                                    className="col-sm-4 leftPart mob-Mode interests animated-highlight"
                                    id="interests"
                                >
                                    <Box className="mob-title">
                                        <h3 className="left-title">Interests</h3>
                                    </Box>
                                    <Box className="mob-content">
                                        {resume.int_hobbies.map((value,pos)=>{
                                            return(
                                                <Box className="cer-iconBox intBox" key={pos}>
                                                    <figure>
                                                        <img src={value.icon} alt="img" />
                                                    </figure>
                                                    <h5>{value.hobbies}</h5>
                                                </Box>
                                            )
                                        })}
                                        
                                        {/* <Box className="cer-iconBox intBox">
                                            <figure>
                                                <img src="/images/resume/Fitness2.png" alt="img" />
                                            </figure>
                                            <h5>Exercise</h5>
                                        </Box>
                                        <Box className="cer-iconBox intBox">
                                            <figure>
                                                <img src="/images/resume/guitar.png" alt="img" />
                                            </figure>
                                            <h5>Playing Guitar</h5>
                                        </Box>
                                        <Box className="cer-iconBox intBox">
                                            <figure>
                                                <img src="/images/resume/no-travelling.png" alt="img" />
                                            </figure>
                                            <h5>Travelling</h5>
                                        </Box> */}
                                    </Box>
                                </Box>
                                <Box className="col-sm-8 rightPart mob-Mode">
                                    <Box className="animated-highlight" id="proficiencies">
                                        <Box className="mob-title">
                                            <h3 className="main-title">TECHNICAL PROFICIENCIES</h3>
                                        </Box>
                                        <Box className="mob-content">
                                            <Box className="tools-lists">
                                                <ul>
                                                    {resume.int_technology.map((value,pos)=>{
                                                        return(
                                                            <li key={pos}>
                                                                <Box className="item">
                                                                    <figure>
                                                                        <img src={value.logo} alt="" />
                                                                    </figure>
                                                                    <Box className="tools-name">{value.title}</Box>
                                                                </Box>
                                                            </li>
                                                        )
                                                    })}
                                                    {/* <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/QXMH56FHPwYio6FTtfJtg6nYIewtlfyB6XwUQueo.png" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">HTML</Box>
                                                        </Box>
                                                    </li>
                                                    <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/1625038228-laravel.jpg" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">Laravel</Box>
                                                        </Box>
                                                    </li>
                                                    <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/VFaFfl1kULGK8pyvmbRuwf3STxOBG8fdwe6LaWRO.png" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">CSS</Box>
                                                        </Box>
                                                    </li>
                                                    <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/7s7SheYpnH0pIBo89PetlDa6Zht6wrFDbIfKyAOY.png" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">PHP</Box>
                                                        </Box>
                                                    </li>
                                                    <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/technical-proficiency_placeholder.png" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">Wordpress </Box>
                                                        </Box>
                                                    </li>
                                                    <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/technical-proficiency_placeholder.png" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">React</Box>
                                                        </Box>
                                                    </li>
                                                    <li>
                                                        <Box className="item">
                                                            <figure>
                                                                <img src="https://profiles.uplers.com/img/proficiency/uHOSaWVrsPccE6f5n43FB5j2mtQHdvj4PDL9KewS.png" alt="" />
                                                            </figure>
                                                            <Box className="tools-name">JOOMLA</Box>
                                                        </Box>
                                                    </li> */}
                                                </ul>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="pmstools animated-highlight" id="pms">
                                        <Box className="mob-title">
                                            <h3 className="main-title">FAMILIAR WITH PMS TOOL</h3>
                                        </Box>
                                        <Box className="mob-content">
                                            <Box className="tools-lists">
                                                <ul>
                                                    {resume.int_pmstools.map((value,pos)=>{
                                                        return(
                                                            <li key={pos}>
                                                                <Box className="item">
                                                                    <figure>
                                                                        <img src={value.logo} alt="" />
                                                                    </figure>
                                                                    <Box className="tools-name">{value.title}</Box>
                                                                </Box>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        </section>
                        :
                        null
                    }
                    
                    {/* App&Tools section END */}
                    {/* Footer START */}
                    <section className="uplers-talent-logo">
                        
                                    <figure>
                                        <img src="/images/resume/setblue_logo_-2.png" alt="img" />
                                    </figure>
                                    
                    </section>
                    {/* Footer END */}
                </Box>
            </Box>

        </>
    )


}

export default Resume;