import React, { useEffect, useState } from "react";
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
const Technology = () => {
    const [technology,setTechnology] = useState([]);
    useEffect(()=>{
        fetch('/api/developertypesinfo/data',{
            headers:{
                "content-Type":"application/json",
                "Accept":"application/json"
            },
            method:"POST"
        }).then(function(response){
            return response.json()
        }).then(function(myjson){
            setTechnology(myjson)
            console.log(myjson)
        })
    },[])
    return (
        <>
            <>
                <Box className="abc">
                    {/* <h2 class="section-title">India's Largest Talent Network</h2> */}
                    <h2 className="section-title">
                        {" "}
                        Best Web Design Company India | Top Website &amp; Mobile App Development
                        Agency
                    </h2>
                    <p className="section-desc">
                        Explore the 50,000+ strong top, pre-vetted talent. From India, for the
                        world.
                    </p>
                </Box>
                <Box className="abd">
                    <Box className="container">
                        <Box className="row mb-3">
                            {
                                technology.map((value,pos)=>{
                                    return(
                                        <>
                                            <Box className="col-md-4 themed-grid-col">
                                                <figure>
                                                    <img style={{marginTop:25}}
                                                        decoding="async"
                                                        src={value.icon}
                                                        alt="Front End Dev"
                                                    />
                                                </figure>
                                                <p>{value.developertype}</p>
                                            </Box>
                                            <Box className="col-md-8 themed-grid-col">
                                                <p>{value.description} &amp; more</p>
                                            </Box>
                                        </>
                                    )
                                })
                            }
                            {/* slide 1 */}
                            
                            
                            {/* <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-back-end.svg"
                                        alt="Back-End Developers"
                                    />
                                </figure>
                                <p>Back-End Developers</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>
                                    Node.js, Laravel, WordPress, Shopify, HubSpot, Magento &amp; more
                                </p>
                            </Box>
                           
                            <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-digital-marketers.svg"
                                        alt="Digital Marketers"
                                    />
                                </figure>
                                <p>Digital Marketers</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>Performance Marketers, Programmatic Specialists, SEO Experts</p>
                            </Box>
                            
                            <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-designers.svg"
                                        alt="Designers"
                                    />
                                </figure>
                                <p>Designers</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>UI/UX, Graphic, Product Designers</p>
                            </Box>
                            
                            <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-salesforce.svg"
                                        alt="Salesforce Experts"
                                    />
                                </figure>
                                <p>Salesforce Experts</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>
                                    Administrators, Functional Consultants, Technical Consultants,
                                    Developers
                                </p>
                            </Box>
                            
                            <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-email-marketers.svg"
                                        alt="Email Marketers"
                                    />
                                </figure>
                                <p>Email Marketers</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>Campaign Managers, Marketing Specialists, Developers</p>
                            </Box>
                            
                            <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-software-engineer.svg"
                                        alt="Software Engineers"
                                    />
                                </figure>
                                <p>Software Engineers</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>Python, .Net, Java &amp; more</p>
                            </Box>
                            
                            <Box className="col-md-4 themed-grid-col">
                                <figure>
                                    <img
                                        decoding="async"
                                        src="https://www.uplers.com/wp-content/themes/uplers/assets/images/home-new/talent-app-developer.svg"
                                        alt="App Developers"
                                    />
                                </figure>
                                <p>App Developers</p>
                            </Box>
                            <Box className="col-md-8 themed-grid-col">
                                <p>iOS, Android, React Native</p>
                            </Box> */}
                        </Box>
                    </Box>
                </Box>
            </>

        </>
    )


}

export default Technology;