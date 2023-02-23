
import FooterPage from "../components/FooterPage";
import { Link } from "react-router-dom";
import { useEffect ,useState } from "react";
import JsonData from '../data.json';
import joi from 'joi';

const Contact = () => {
    const [services,setServices] = useState("");
    const [name,setName] = useState("");
    const [mobile_no,setMobie_no] = useState("");
    const [email,setEmail] = useState("");
    const [country,setCountry] = useState("");
    const [city,setCity] = useState("");
    const [address,setAddress] = useState("");
    const [description,setDescription] = useState("");
    const [contact,setContact] = useState("");
    const [errors,setErrors] = useState({});

    const validateForm = ()=>{
        const schema = joi.object({
            services:joi.string().required(),
            name:joi.string().required(),
            mobile_no:joi.string().length(10).pattern(/^[0-9]+$/).required(),
            email:joi.string().email({tlds:{allow: false}}).required(),
            country:joi.string().required(),
            city:joi.string().required(),
            address:joi.string().required(),
            description:joi.string().required()
        })
        const result = schema.validate({services,name,mobile_no,email,country,city,address,description},{abortEarly:false})
        const {error} = result;
        if (!error) {
            setErrors(null)
            return null;
        } else {
          const errorData = {};
          for (let item of error.details) {
            const name = item.path[0];
            const message = item.message;
            errorData[name] = message;
          }
          setErrors(errorData);
          return errorData;
        }
      };
    let handlesubmit = async(e)=>{
        e.preventDefault();
        
        try{
            if(!errors.file){
                let errorFields = validateForm();
                console.log(errorFields)
                if(!errorFields)//no error fields
                {
                    await fetch('/api/contact',{
                        headers:{
                            'Content-Type':"application/json",
                            'Accept':"application/json"
                        },
                        method:'POST',
                        body:JSON.stringify({
                            services:services,
                            name:name,
                            mobile_no:mobile_no,
                            email:email,
                            country:country,
                            city:city,
                            address:address,
                            description:description
                        })
                    }).then(function(response){
                        console.log(response);
                        return response;
                    }).then(function(myjson){
                        setContact(myjson);
                        console.log(myjson)
                    })
                }
            }    
        }catch(err){
            return err;
        }
    }

    return (

        <>
            <div className="wrapper">
                <div className="page-overlay" />
                <div id="header" />
                {/* / .main-nav */}
                {/* end .header */}
                <div className="inner-page-header">
                    <img className="img-full" src="images/contact01.jpg" alt="" />
                    <div className="banner-title d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-lg-12">Contact Us</div>
                            <div className="col-lg-12 sub-title">
                                Its your move, how you want to Contact Us...{" "}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_box_w">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-12">
                                <div className="section-heading crumina-heading">
                                    <h1 className="title">Corporate Office</h1>
                                    <div className="heading-decoration">
                                        <span className="first blue" />
                                        <span className="second blue" />
                                    </div>
                                </div>
                                <div className="gentext">
                                    112, Jeevandeep Complex,
                                    <br />
                                    Near Nirmal Hospital,
                                    <br />
                                    Ring Road, Jeevandeep Society,
                                    <br />
                                    Sagrampura, Surat - 395002
                                    <br />
                                    Gujarat, INDIA
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-6 border-right">
                                        <div className="md-title pb-2">Call Us</div>
                                        <span className="gentext01">
                                            <i className="sprite inr-fleg" />
                                            INDIA: +91-98985-98984{" "}
                                        </span>
                                    </div>
                                    <div className="col-lg-6 contact-email">
                                        <div className="md-title pb-2">Email</div>
                                        <span className="gentext01">
                                            <Link to="mailto:info@setblue.com">
                                                <i className="sprite mail-icon" />
                                                info@setblue.com
                                            </Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-12">
                                <div className="google-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2719024140233!2d72.8231333149351!3d21.181354985915952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e6a2dfb24c5%3A0x3c0399aa6565be8!2sSetBlue.com+-+Website+Development%2FDesign+Company+%7C+App+Development+Company+(Surat)+India!5e0!3m2!1sen!2sin!4v1559033865800!5m2!1sen!2sin"
                                        width="100%"
                                        height={350}
                                        frameBorder={0}
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="enquiry" className="inner_box_w gry_bg">
                    <div className="container margin-4-bot">
                        <div className="section-heading crumina-heading">
                            <h1 className="title">Get In Touch With Us</h1>
                            <div className="heading-decoration">
                                <span className="first blue" />
                                <span className="second blue" />
                            </div>
                            <div className="md-title pt-3">
                                Please contact us using the form and we’ll get back to you as soon as
                                possible.
                            </div>
                        </div>
                        <div className="margin-4-top">
                            <div className="login_box">
                                <div className="login-form">
                                    <form action="" className="row" onSubmit={handlesubmit}>
                                        <div className="col-lg-6">
                                            <div className=" mb-4">
                                                <div className="textfild_tile">
                                                    Services <span className="blue">*</span>
                                                </div>
                                                <div className="select-wrapper">
                                                    <select className="form-control" onChange={(e)=>setServices(e.target.value)} multiple>
                                                        <option value="WEB DESIGN">WEB DESIGN</option>
                                                        <option value="WEB DEVELOPMENT">WEB DEVELOPMENT</option>
                                                        <option value="BRANDING">BRANDING</option>
                                                        <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
                                                        <option value="WEB PRODUCTS">WEB PRODUCTS</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    {errors.services && (
                                                        <div className="alert alert-danger">
                                                            {errors.services}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="textfild_tile">
                                                    Your Name <span className="blue">*</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter your name here"
                                                    value={name}
                                                    onChange={(e)=>setName(e.target.value)}
                                                />
                                                {errors.name && (
                                                    <div className="alert alert-danger">
                                                        {errors.name}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 mb-4">
                                                    <div className="textfild_tile">
                                                        Contact number<span className="blue">*</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Mobile / Tel No."
                                                        value={mobile_no}
                                                        onChange={(e)=>setMobie_no(e.target.value)}
                                                    />
                                                    {errors.mobile_no && (
                                                        <div className="alert alert-danger">
                                                            {errors.mobile_no}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="col-lg-6 mb-4">
                                                    <div className="textfild_tile">
                                                        Email <span className="blue">*</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter your name here"
                                                        value={email}
                                                        onChange={(e)=>setEmail(e.target.value)}
                                                    />
                                                    {errors.email && (
                                                        <div className="alert alert-danger">
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6  mb-4">
                                                    <div className="textfild_tile">
                                                        Country <span className="blue">*</span>
                                                    </div>
                                                    <div className="select-wrapper">
                                                        <select className="form-control" onChange={(e)=>setCountry(e.target.value)}>
                                                            <option value="">--Select Country--</option>
                                                            {JsonData.map((value,pos)=>{
                                                                return(
                                                                    <option value={value.text} key={pos}>{value.text}</option>
                                                                )
                                                            })}
                                                            
                                                            {/* <option value="">Lorem Ipsum</option>
                                                            <option value="">Lorem Ipsum</option>
                                                            <option value="">Lorem Ipsum</option> */}
                                                        </select>
                                                        {errors.country && (
                                                            <div className="alert alert-danger">
                                                                {errors.country}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-sm-6  mb-4">
                                                    <div className="textfild_tile">
                                                        City <span className="blue">*</span>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="City"
                                                        value={city}
                                                        onChange={(e)=>setCity(e.target.value)}
                                                    />
                                                    {errors.city && (
                                                        <div className="alert alert-danger">
                                                            {errors.city}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="textfild_tile">
                                                    Address <span className="blue">*</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    value={address}
                                                    onChange={(e)=>setAddress(e.target.value)}
                                                />
                                                {errors.address && (
                                                    <div className="alert alert-danger">
                                                        {errors.address}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className=" mb-4">
                                                <div className="textfild_tile">
                                                    Your requirements <span className="blue">*</span>
                                                </div>
                                                <textarea
                                                    name=""
                                                    className="form-control requirement_box"
                                                    placeholder="Brief us your requirement"
                                                    value={description}
                                                    onChange={(e)=>setDescription(e.target.value)}
                                                />
                                                {errors.description && (
                                                    <div className="alert alert-danger">
                                                        {errors.description}
                                                    </div>
                                                )}
                                            </div>
                                            <div className=" mb-4 text-right">
                                                <img src="images/captcha.jpg" alt="" />
                                            </div>
                                            <div className=" mb-4">
                                                <button className="btn btn-block orange-btn">
                                                    Submit Message
                                                </button>
                                                {/*<div className="gentext gry">We respect your privacy. We promise we won't spam you :)</div>*/}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer" />
                {/* end .footer*/}
            </div>
            <FooterPage/>

        </>
    )


}

export default Contact;