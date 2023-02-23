import { Link } from "react-router-dom";
import { 
    
    Box,
    // Table,
    // TableBody,
    // TableHead, 
    // TableRow,
    // TableCell,
    // Button,

} from '@mui/material';


const Navigation = () => {


    return (
        <>

            <Box className="menu-overlay" />
            <Box className="fixed-right-btn">
                <Link
                    to=""
                    className="sticker-btn text-decoration-none"
                    data-toggle="modal"
                    data-target="#myModal"
                    id=""
                    
                >
                    Free Quote
                </Link>
                
                
            </Box>
            <Box className="fixed-left-btn">
                <Link
                    to="/"
                    className="animated infinite heartBeat delay-2s sprite whatsapp"
                />
                <Link to="/" className="sprite call-round" />
            </Box>
            <Box className="header-top">
                <Box className="container clearfix">
                    <Box className="d-flex align-items-center justify-content-end">
                        <span>
                            <i className="sprite inr-fleg" />
                            INDIA: +91-98985-98984{" "}
                        </span>
                        <span className="h-email">
                            <i className="sprite mail-icon" />
                            info@setblue.com
                        </span>
                    </Box>
                </Box>
            </Box>
            <Box className="header-middle menu-close">
                <Box className="container clearfix po_initial">
                    <Box className="row extra-small-gutter align-items-center justify-content-between">
                        <Box className="col-lg-3 col-8">
                            <button type="button" className="navbar-toggle">
                                <span className="icon-bar bar-top" />
                                <span className="icon-bar bar-middle" />
                                <span className="icon-bar bar-bottom" />
                            </button>
                            <Link to="/" className="brand-logo">
                                <img src="images/setblue_logo_.png" alt="" />
                            </Link>
                        </Box>
                        <Box className="col-lg-9 col-4 text-right po_initial">
                            <Box className="menu-overlay" />
                            <Box className="display_in home_none">
                                <Link to="/">
                                    <i className="sprite home-icon" />
                                </Link>
                            </Box>
                            <Box className="navbar-main display_in">
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
                                        <Box className="main-parent" />
                                        <Box className="dropdown-box  menu-item-container  ">
                                            <Box className="container">
                                                <Box className="row no-gutter row-flex flexbox-container">
                                                    <Box className="col-md-3 drop-menu-box text-left m-b-sm ">
                                                        <Link to="/Services" className="nav-blocks-title text-decoration-none" >
                                                            Web Design
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu pl-1">
                                                            <li >
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>UI/UX Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>App Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Template Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>PSD to HTML</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Blog Design</Link>
                                                            </li>
                                                        </ul>
                                                    </Box>
                                                    <Box className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="/Services" className="nav-blocks-title text-decoration-none">
                                                            Web Developement
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu  pl-1">
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>ASP.NET Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>WordPress Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Magento Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Web API Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>OpenCart Development</Link>
                                                            </li>
                                                        </ul>
                                                        <Link to="/Services" className="nav-blocks-title text-decoration-none">
                                                            Mobile Apps
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu mb-4  pl-1">
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Android Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>iOS Development</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>iPad Development</Link>
                                                            </li>
                                                        </ul>
                                                    </Box>
                                                    <Box className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="/Services" className="nav-blocks-title text-decoration-none">
                                                            Digital marketing
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu  pl-1">
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>SEO Services</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>PPC Advertising</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Social Media Marketing</Link>
                                                            </li>
                                                        </ul>
                                                        <Link to="/Services" className="nav-blocks-title text-decoration-none">
                                                            Branding
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu  pl-1">
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Logo Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Banner Design</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Brochure Design</Link>
                                                            </li>
                                                        </ul>
                                                    </Box>
                                                    <Box className="col-md-3 drop-menu-box text-left m-b-sm">
                                                        <Link to="/Services" className="nav-blocks-title text-decoration-none">
                                                            Hire Developers
                                                        </Link>
                                                        <ul className="category-list-menu dropdown-list-menu  pl-1">
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire ASP.Net Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire Wordpress Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire SEO Experts</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire PHP Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire HTML5 Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire IOS Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire Magento Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire CMS Developers</Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/ServiceDetails" className='text-decoration-none'>Hire Android Developers</Link>
                                                            </li>
                                                        </ul>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="menu_text">Completed 1000+ Projects</Box>
                                        </Box>
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
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            

        </>

    )


}

export default Navigation;