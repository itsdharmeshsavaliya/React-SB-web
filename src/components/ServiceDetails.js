import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";

const ServiceDetails = () => {

    return (
        <>
            <div className="wrapper">
                <div className="page-overlay" />
                <div id="header" />
                {/* end header */}
                <div className="inner-page-header">
                    <img className="img-full" src="images/web_design01.jpg" />
                    <div className="banner-title d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-lg-12">Web Design</div>
                            <div className="col-lg-12 sub-title">
                                your brand creatives do the talking
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-12 border-right">
                            <div className="inner_box_w">
                                <div className="section-heading crumina-heading">
                                    <h1 className="title">Web Design</h1>
                                    <div className="heading-decoration">
                                        <span className="first blue" />
                                        <span className="second blue" />
                                    </div>
                                </div>
                                <div className="services_sublink">
                                    <ul>
                                        <li>
                                            <Link to="/">UI/UX Design</Link>
                                        </li>
                                        <li>
                                            <Link to="/">App Design</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Template Design</Link>
                                        </li>
                                        <li>
                                            <Link to="/">PSD to HTML</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Blog Design</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-8 col-sm-12">
                            <div className="inner_box_w pl-5">
                                <div className="mb-5">
                                    <div className="section-heading crumina-heading">
                                        <h1 className="title">UI/UX Design</h1>
                                        <div className="heading-decoration">
                                            <span className="first blue" />
                                            <span className="second blue" />
                                        </div>
                                    </div>
                                    <p className="gentext01 text-justify mb-4">
                                        Known for crafting experiences for web and mobile, we at SetBlue,
                                        deploy user-centric design approach that not only improves the
                                        overall browsing experience but also results in desired user
                                        action. Hire our professional UI/UX designers today and let your
                                        brand creatives do the talking{" "}
                                    </p>
                                    <p className="gentext text-justify">
                                        Being known as the top UX/UI design company in USA/India with head
                                        office in Surat (Gujarat), we strongly believe that "Creativity
                                        comes with passion" and with our decade old experience, our highly
                                        skilled certified web designers craft the functional designs that
                                        will make your visitors spend more time on your website and your
                                        brand will stand out with unique creatives. Hire our web design
                                        services today at affordable prices and let your brand design do
                                        the talking.
                                    </p>
                                </div>
                                <div className="mb-0">
                                    <div className="section-heading crumina-heading">
                                        <h1 className="title">Why hire UX/UI Designers from SetBlue?</h1>
                                        <div className="heading-decoration">
                                            <span className="first blue" />
                                            <span className="second blue" />
                                        </div>
                                    </div>
                                    <div className="career_option gentext">
                                        <ul>
                                            <li>
                                                Visually appealing and impressive designs with user-friendly
                                                interface
                                            </li>
                                            <li>Custom user experience solutions as your requirements</li>
                                            <li>Skilled team of web designers with years of experience</li>
                                            <li>Cost-effective packages with quality assurance</li>
                                            <li>Designed UX/UI for varied industry verticals</li>
                                        </ul>
                                    </div>
                                    <div className="gentext01">
                                        At SetBlue, you'll find wide array of UX/UI design services for
                                        web and mobile apps both - all under one single roof. Get it touch
                                        with us today and let us design something magical and function for
                                        you.
                                    </div>
                                    <div className="text-left mt-4">
                                        <div className="orange-btn-b">
                                            <Link to="/">Enquire Now!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer" />
                {/* end footer*/}
            </div>

            <FooterPage />

        </>
    )


}

export default ServiceDetails;