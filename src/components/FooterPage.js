import { Link } from "react-router-dom";
import "../index.css"
import Contactus from "../pages/Contactus";
const FooterPage = () => {

    return (
        
            <>
                <Contactus/>
                <div className="footer-wrapper">
                    <div className="footer-top-box">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <div className="w-heading01 text-right">
                                        Do you have a project in mind? Let's start a friendly conversation
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="border-left01 w-heading01 text-left">
                                        <Link to="/">
                                            <i className="whatsapp_icon sprite" />
                                            +91 98985 98984{" "}
                                        </Link>
                                    </div>{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="footer-middle pb-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="footer-title">Navigation</div>
                                            <ul className="footer-links">
                                                <li>
                                                    <Link to="/About" className="text-decoration-none">About</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Portfolio" className="text-decoration-none">Portfolio</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Services</Link>
                                                </li>

                                                <li>
                                                    <Link to="/Careers" className="text-decoration-none">Careers</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Contact" className="text-decoration-none">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="footer-title font-weight_500">Services</div>
                                            <ul className="footer-links">
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Web Design</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Web Development</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Mobile Apps</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Digital marketing</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Branding</Link>
                                                </li>
                                                <li>
                                                    <Link to="/Services" className="text-decoration-none">Technologies</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="footer-title font-weight_500">
                                                Global Presence
                                            </div>
                                            <ul className="footer-links">
                                                <li>
                                                    <Link to="/" className="text-decoration-none">USA</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-decoration-none">Australia</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-decoration-none">Canada</Link>
                                                </li>
                                                <li>
                                                    <Link to="/" className="text-decoration-none">India</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3 text-right fborder_left">
                                            <div className="footer-title font-weight_500">Contact Us</div>
                                            <ul className="footer-links">
                                                <li className="align-items-center">
                                                    <h3 className="sm-title">+91-98985-98984</h3>
                                                </li>
                                                <li className="align-items-center">
                                                    <Link to="mailto:info@setblue.com" className="text-decoration-none">info@setblue.com</Link>
                                                </li>
                                            </ul>
                                            <div className="footer-title font-weight_500 mt-3">
                                                Find us on
                                            </div>
                                            <ul className="social-follow mt-3 mb-3 text-right">
                                                <li>
                                                    <Link to={{ pathname: "https://www.facebook.com" }} target="_blank">
                                                        <span className="facebook">
                                                            <i className="fa fa-facebook"></i>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={{ pathname: "https://twitter.com" }} target="_blank">
                                                        <span className="twitter">
                                                            <i className="fa fa-twitter"></i>
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={{ pathname: "https://www.instagram.com" }} target="_blank">
                                                        <span className="instagram">
                                                            <i className="fa fa-instagram"></i>
                                                        </span>
                                                    </Link>

                                                    
                                                </li>
                                                <li>
                                                    <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank">
                                                        <span className="linkedin">
                                                            <i className="fa fa-linkedin"></i>
                                                        </span>
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-9 text-center">
                                ©2019 All Rights Reserved to<span className="font-bold">SetBlue</span>
                                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                                <Link to="/">Terms &amp; Conditions</Link>
                                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<Link to="/">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "none" }} id="back-top" className="goTop text-center">
                    <Link to="javascript;">
                        <i className="sprite up-arrow" />
                        <span className="d-block top-text">Top</span>
                    </Link>
                </div>
            </>

        


    )

}

export default FooterPage;