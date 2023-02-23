import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";

const About = () => {

    return (
        <>
            <div className="wrapper">
                <div className="page-overlay"></div>
                <div id="header"></div>

                <div className="inner-page-header">
                    <img className="img-full" src="images/about01.jpg" alt=""/>
                        <div className="banner-title d-flex justify-content-center align-items-center">
                            <div className="">
                                <div className="">About Us</div>
                                <div className="sub-title">Brighten your career with us!</div>
                            </div>
                        </div>
                </div>
                <div className="inner_box_w">
                    <div className="mb-5">
                        <div className="content-resizer">
                            <div className="container">
                                <div className="section-heading crumina-heading">
                                    <h1 className="title">Who we are?</h1>
                                    <div className="heading-decoration">
                                        <span className="first blue" />
                                        <span className="second blue" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <p className="gentext01 text-justify">
                                            With this thought, Amit Tulsiyani, the Founder and CEO of
                                            SetBlue embarked on a mission to come up with the most
                                            affordable and high quality website designing and development
                                            company in Surat and eventually in India. Although the future
                                            seemed uncertain and bleak at that time, he wanted to unleash
                                            the spirit of 100% customer satisfaction with supreme web
                                            solutions. There were many hurdles of questions being thrown on
                                            a newbie in the industry, but nothing could deter his eternal
                                            determination and philosophy of pursuance, integrity &amp;
                                            loyalty.
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="gentext text-justify">
                                            Incorporated in the year 2005, with its first office of 200 sq
                                            feet, the passionate bunch of SetBlue team members kept growing
                                            from 2.. to 10.. to… 100 and now finally the time has come when
                                            the office of 3000 sq feet has no looking back. <br />
                                            <br />
                                            We provide comprehensive Web Development, Web Designing, Mobile
                                            Apps Development, Internet Marketing, Content Development,
                                            Search Engine Optimization, and Paid Search Marketing services.
                                            We endeavor to aim for a long-term association with our clients
                                            and this thought percolates in every project we take up.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="gry_bg mb-5">
                        <div className="content-resizer">
                            <div className="container">
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6">
                                        <div className="section-heading crumina-heading">
                                            <h1 className="title">How We Work</h1>
                                            <div className="heading-decoration">
                                                <span className="first blue" />
                                                <span className="second blue" />
                                            </div>
                                        </div>
                                        <p className="gentext01 text-justify">
                                            No matter what your requirement is; Mobile App and web
                                            development, we have a specific approach which comprises of the
                                            following
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="we_work_img">
                                            <img src="images/how_we_work.png" className="img-full" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="content-resizer">
                            <div className="container">
                                <div className="section-heading crumina-heading">
                                    <h1 className="title">What makes us different?</h1>
                                    <div className="heading-decoration">
                                        <span className="first blue" />
                                        <span className="second blue" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="gentext text-justify">
                                            We stand apart because of our service and that is possible only
                                            due to the hard work of our team. SetBlue team is a group of
                                            passionate and dedicated professionals who have joined us with
                                            years of relevant experience behind them. The undying passion
                                            and ever-growing knowledge of our team is the strength of
                                            SetBlue. We motivate and push each other to come up with
                                            excellent web solutions within the stipulated time. In this age
                                            of rapid progression in the technical department, we keep our
                                            team updated with all the newest industry techniques. As a team,
                                            we give utmost importance to client’s time and money, and thus
                                            we work towards making every venture profitable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <div className="content-resizer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="section-heading crumina-heading">
                                            <h1 className="title">Future Goal</h1>
                                            <div className="heading-decoration">
                                                <span className="first blue" />
                                                <span className="second blue" />
                                            </div>
                                        </div>
                                        <p className="gentext text-justify">
                                            SetBlue, armed with state of the art technologies, aims to grow
                                            and provide web solutions to International sectors and
                                            facilitate their businesses to grow. We want to unceasingly
                                            deliver web solutions that is not only pocket-friendly but also
                                            helps the clients to accomplish milestones of success. With so
                                            much coming our way, we believe our web solutions have met the
                                            expectations of our clients.
                                        </p>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="section-heading crumina-heading">
                                            <h1 className="title">Don’t worry about the distance</h1>
                                            <div className="heading-decoration">
                                                <span className="first blue" />
                                                <span className="second blue" />
                                            </div>
                                        </div>
                                        <p className="gentext text-justify">
                                            Even though we operate from our Surat branch office, we stay
                                            connected to our clients with the help of Skype, IM (instatnt
                                            messaging), Video Conference and Phone. This is why there has
                                            never been a case of communication Gap. So, even if you are
                                            located 2000 miles away, do not worry we know how to take care
                                            of your requirement.
                                        </p>
                                    </div>
                                    <div className="col-lg-12 mt-5 gentext01">
                                        Should you seek additional information regarding our skills,
                                        services and potential, write back to us at{" "}
                                        <Link className="a-email" to="mailto:info@set.co.in">
                                            info@set.co.in
                                        </Link>
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

export default About;