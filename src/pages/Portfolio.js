import React from 'react'
import FooterPage from '../components/FooterPage';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const Portfolio = () => {
    const [portfoliocategory,setPortfoliocategory] = useState([]);
    const [portfoliodata,setPortfoliodata] = useState([]);
    
    useEffect(()=>{
       fetch('/api/portfolio/category/data',{
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        method:'POST'
       }).then(function(response){
        console.log(response)
        return response.json()
       }).then(function(myjson){
       setPortfoliocategory(myjson.portfoliocategory);
    //setPortfoliodata(myjson.portfoliodata)
       console.log(myjson.portfoliodata)
       setPortfoliodata(myjson.portfoliodata)
       }); 
    },[])
    return (

        <>
            <div className="wrapper">
                <div className="page-overlay" />
                <div id="header" />
                {/* end header */}
                <div className="inner-page-header">
                    <img className="img-full" src="images/Technologies01.jpg" alt="" />
                    <div className="banner-title d-flex justify-content-center align-items-center">
                        <div className="">
                            <div>Portfolio</div>
                            <div className=" sub-title">
                                Rich, Interactive and Beautiful Digital Experience.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    {/* <div className="container-fluid">
                        <ul className="nav nav-tabs text-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active"
                                    data-toggle="tab"
                                    to="#tab01"
                                    aria-selected="true"
                                >
                                    All
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    to="/tab02"
                                    aria-selected="false"
                                >
                                    CMS Web Site
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    to="/tab03"
                                    aria-selected="false"
                                >
                                    Mobile Apps
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    to="/tab04"
                                    aria-selected="false"
                                >
                                    E-commerce
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    data-toggle="tab"
                                    to="/tab05"
                                    aria-selected="false"
                                >
                                    Logo &amp; Branding
                                </Link>
                            </li>
                        </ul>
                    </div> */}
                    <div className="container-fluid">
                        <ul className="nav nav-tabs text-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#taball" aria-selected="false">All</a>
                            </li>
                            {
                                portfoliocategory.map((value,pos)=>{
                                    return(
                                        <li className="nav-item" key={pos}>
                                            <a className={"nav-link" + ((pos === 0)? "active" : '')} data-toggle="tab" href={`#tab${pos}`} aria-selected={(pos===0) ? "true":"false"}>{value.categoryname}</a>
                                        </li>
                                    )
                                })
                            }
                
                            {/* <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab02" aria-selected="false">CMS Web Site</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab03" aria-selected="false">Mobile Apps</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab04" aria-selected="false">E-commerce</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#tab05" aria-selected="false">Logo & Branding</a>
                            </li> */}

                        </ul>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="taball">
                            <div className="portfolio_w_main">
                                <div className="mt-5">
                                    <div className="row">
                                    {
                                        portfoliocategory.map((value,pos)=>
                                        {
                                            return portfoliodata[value._id].map((pvalue,ppos)=>(
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={ppos}>
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src={pvalue.image} alt="" />
                                                </div>
                                                <div className="portfolio_name">{pvalue.websitename}</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        {pvalue.websitename}
                                                    </h3>
                                                    
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to={pvalue.websitelink}>Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            ));
                                        }
                                            
                                    )}
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-5">
                                    <div className="blue-btn">
                                        <Link to="/">More Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {
                     portfoliocategory.map((value,pos)=>
                        
                        <div className={"tab-pane fade" + ((pos === 0)?"show active":"")} id={`tab${pos}`} key={pos} >
                            <div className="portfolio_w_main">
                                <div className="mt-5">
                                    <div className="row">
                                        { portfoliodata[value._id].map((pvalue,ppos)=>
                                            <div className="col-lg-3 col-md-4 col-sm-6 col-6" key={ppos}>
                                                <div className="portfolio_box">
                                                    <div className="portfolio_img">
                                                        <img src={pvalue.image} alt="" />
                                                    </div>
                                                    <div className="portfolio_name">{pvalue.websitename}</div>
                                                    <div className="portfolio_overlow">
                                                        <h3 className="sm-title white text-center pt-5">
                                                            {pvalue.websitename}
                                                        </h3>
                                                        <div className="text-center mt-4">
                                                            <div className="white-btn">
                                                                <Link to={pvalue.websitelink}>Visit Site</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                        
                        {/* <div className="tab-pane fade show active" id="tab">
                                    <div className="portfolio_w_main">
                                        <div className="mt-5">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/01.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name"></div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/02.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/03.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/04.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/05.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/06.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/07.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/08.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/09.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/10.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/11.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/12.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/13.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/14.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                                    <div className="portfolio_box">
                                                        <div className="portfolio_img">
                                                            <img src="images/portfolio/15.jpg" alt="" />
                                                        </div>
                                                        <div className="portfolio_name">Raghuvir</div>
                                                        <div className="portfolio_overlow">
                                                            <h3 className="sm-title white text-center pt-5">
                                                                Aswani Industries Pvt. Ltd.
                                                            </h3>
                                                            <div className="text-center mt-4">
                                                                <div className="white-btn">
                                                                    <Link to="/">Visit Site</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center mt-3 mb-5">
                                            <div className="blue-btn">
                                                <Link to="/">More Portfolio</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            
                        {/* <div className="tab-pane fade" id="tab02">
                            <div className="portfolio_w_main">
                                <div className="mt-5">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/01.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/02.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/03.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/04.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/05.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/06.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/07.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/08.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/09.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/10.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/11.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/12.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/13.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/14.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/15.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-5">
                                    <div className="blue-btn">
                                        <Link to="/">More Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab03">
                            <div className="portfolio_w_main">
                                <div className="mt-5">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/01.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/02.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/03.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/04.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/05.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/06.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/07.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/08.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/09.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/10.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/11.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/12.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/13.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/14.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/15.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-5">
                                    <div className="blue-btn">
                                        <Link to="/">More Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab04">
                            <div className="portfolio_w_main">
                                <div className="mt-5">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/01.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/02.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/03.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/04.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/05.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/06.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/07.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/08.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/09.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/10.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/11.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/12.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/13.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/14.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/15.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-5">
                                    <div className="blue-btn">
                                        <Link to="/">More Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab05">
                            <div className="portfolio_w_main">
                                <div className="mt-5">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/01.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/02.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/03.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/04.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/05.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/06.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/07.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/08.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/09.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/10.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/11.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/12.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/13.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/14.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                            <div className="portfolio_box">
                                                <div className="portfolio_img">
                                                    <img src="images/portfolio/15.jpg" alt="" />
                                                </div>
                                                <div className="portfolio_name">Raghuvir</div>
                                                <div className="portfolio_overlow">
                                                    <h3 className="sm-title white text-center pt-5">
                                                        Aswani Industries Pvt. Ltd.
                                                    </h3>
                                                    <div className="text-center mt-4">
                                                        <div className="white-btn">
                                                            <Link to="/">Visit Site</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-3 mb-5">
                                    <div className="blue-btn">
                                        <Link to="/">More Portfolio</Link>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div id="footer" />
                {/* end footer*/}
            </div>
            <FooterPage/>

        </>

    )


}

export default Portfolio;