

import { Link } from "react-router-dom";


const Navigation = () => {


    return (
        <>

            <div className="menu-overlay" />
            <div className="fixed-right-btn">
                <Link
                    to=""
                    className="sticker-btn"
                    data-toggle="modal"
                    data-target="#myModal"
                    id=""
                >
                    Free Quote
                </Link>
                
                
            </div>
            <div className="fixed-left-btn">
                <Link
                    to="/"
                    className="animated infinite heartBeat delay-2s sprite whatsapp"
                />
                <Link to="/" className="sprite call-round" />
            </div>
            <div className="header-top">
                <div className="container clearfix">
                    <div className="d-flex align-items-center justify-content-end">
                        <span>
                            <i className="sprite inr-fleg" />
                            INDIA: +91-98985-98984{" "}
                        </span>
                        <span className="h-email">
                            <i className="sprite mail-icon" />
                            info@setblue.com
                        </span>
                    </div>
                </div>
            </div>
            <div className="header-middle menu-close">
                <div className="container clearfix po_initial">
                    <div className="row extra-small-gutter align-items-center justify-content-between">
                        <div className="col-lg-3 col-8">
                            <button type="button" className="navbar-toggle">
                                <span className="icon-bar bar-top" />
                                <span className="icon-bar bar-middle" />
                                <span className="icon-bar bar-bottom" />
                            </button>
                            <Link to="/" className="brand-logo">
                                <img src="images/setblue_logo_.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-lg-9 col-4 text-right po_initial">
                            <div className="menu-overlay" />
                            <div className="display_in home_none">
                                <Link to="/">
                                    <i className="sprite home-icon" />
                                </Link>
                            </div>
                            <div className="navbar-main display_in">
                                <ul className="nav-main">
                                    <li>
                                        <Link className="dropdown" to="/About">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown" to="/Portfolio">
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li className="dropdown dropdown-full">
                                        <Link to="/Services">Services</Link>
                                        <div className="main-parent" />
                                        <div className="dropdown-box  menu-item-container ">
                                            <div className="container">
                                                <div className="row no-gutter row-flex flexbox-container">
                                                    <div className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="/Services" className="nav-blocks-title">
                                                            Web Design
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu">
                                                            <li>
                                                                <Link to="/ServiceDetails">UI/UX Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">App Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Template Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">PSD to HTML</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Blog Design</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="services.html" className="nav-blocks-title">
                                                            Web Developement
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu">
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
                                                        <Link to="services.html" className="nav-blocks-title">
                                                            Mobile Apps
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu mb-4">
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
                                                    <div className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="services.html" className="nav-blocks-title">
                                                            Digital marketing
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu">
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
                                                        <Link to="services.html" className="nav-blocks-title">
                                                            Branding
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu">
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
                                                    <div className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="services.html" className="nav-blocks-title">
                                                            Hire Developers
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu">
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire ASP.Net Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire Wordpress Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire SEO Experts</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire PHP Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire HTML5 Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire IOS Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire Magento Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire CMS Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails">Hire Android Developers</Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="menu_text">Completed 1000+ Projects</div>
                                        </div>
                                    </li>
                                    <li>
                                        <Link className="dropdown" to="/Careers">
                                            Careers
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown" to="/Contact">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation;