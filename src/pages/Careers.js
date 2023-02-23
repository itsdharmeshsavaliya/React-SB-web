import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FooterPage from "../components/FooterPage";

const Careers = () => {
    const [career,setCareer] = useState([]);
    useEffect(()=>{
        fetch('/api/career/data',{
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            method:'GET'
        }).then(function(response){
            console.log(response)
            return response.json();
        }).then(function(myjson){
            setCareer(myjson);
            console.log(myjson)
        })
    },[])

    return (
        <>
            <div className="wrapper">
                <div className="page-overlay" />
                <div id="header" />
                {/* end header */}
                <div className="inner-page-header">
                    <img className="img-full" src="images/careers01.jpg" alt="" />
                    <div className="banner-title d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-lg-12">Careers</div>
                            <div className="col-lg-12 sub-title">Brighten your career with us!</div>
                        </div>
                    </div>
                </div>
                <div className="inner_box_w mt-5">
                    <div className="content-resizer">
                        <div className="container">
                            <div className="row">
                                {
                                    career.map((value,pos)=>{
                                        return(
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={pos}>
                                                <div className="requirement-box">
                                                    <h3 className="re_round">{value.language_icon}</h3>
                                                    <h4 className="md-title text-center mt-3">{value.title}</h4>
                                                    <p className="job_d">
                                                        Experience : {value.experience} Years
                                                        <br />{value.position} Position
                                                    </p>
                                                    <div className="text-center mt-3">
                                                        {value.status === true?<div className="blue-btn">
                                                            <Link to={`/Career?name=${value.title}`} className="text-decoration-none">Apply</Link>
                                                        </div>:<div className="disable-btn">
                                                            <Link to={`/Career?name=${value.title}`}>Apply</Link>
                                                        </div>}
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                
                                {/* <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="disable-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="blue-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="disable-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="blue-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="blue-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="disable-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="blue-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div className="requirement-box">
                                        <h3 className="re_round">M</h3>
                                        <h4 className="md-title text-center mt-3">Magento Developer</h4>
                                        <p className="job_d">
                                            Experience : 3 Years
                                            <br />0 Position
                                        </p>
                                        <div className="text-center mt-3">
                                            <div className="blue-btn">
                                                <Link to="/Career">Apply</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="row mb-4">
                                <div className="col-lg-8 mx-auto text-center">
                                    <div className="md-title mb-2 drak-gry">Email resumes to</div>
                                    <div className="carres_email">
                                        <Link to="mailto:hr@setblue.com">
                                            <i className="c_emial_icon sprite" />
                                            hr@setblue.com
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
            <FooterPage/>

        </>
    )


}

export default Careers;