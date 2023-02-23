import { useState } from "react";

const Contactus = ()=>{
    const [services,setServices] = useState("");
    const [name,setName] = useState("");
    const [mobile_no,setMobie_no] = useState("");
    const [email,setEmail] = useState("");
    const [country,setCountry] = useState("");
    const [city,setCity] = useState("");
    const [address,setAddress] = useState("");
    const [description,setDescription] = useState("");
    const [contact,setContact] = useState("")

    let handlesubmit = async(e)=>{
        e.preventDefault();

        
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
        setServices('');
        setName('');
        setMobie_no('');
        setEmail('');
        setCountry('');
        setCity('');
        setAddress('');
        setDescription('');
        setContact('');

    }


    return(
        <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content my-popup">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title white lg-title">
                                We'd love to talk with you
                            </h4>
                            <button type="button" className="close" data-dismiss="modal">
                                ×
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
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
                                                    <option value="India">India</option>
                                                    <option value="">Lorem Ipsum</option>
                                                    <option value="">Lorem Ipsum</option>
                                                    <option value="">Lorem Ipsum</option>
                                                </select>
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
    )
}
export default Contactus;