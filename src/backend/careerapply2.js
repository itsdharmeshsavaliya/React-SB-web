
import { useEffect } from "react";
import { useState } from "react";
//import {useForm} from 'react-hook-form';
import { useLocation } from "react-router-dom";
import joi from 'joi';

const Careerapply = ()=>{
    const [customer,setCustomer] = useState({
        name:"",
        mobile_no:"",
        email:"",
        status:"",
        noticeperiod:"",
        description:"",        
        applyingname:"",
        file:"",
        career:[],
        data:[]
    })
    // const [name,setName] = useState("");
    // const [mobile_no,setMobile_no] = useState("");
    // const [email,setEmail] = useState("");
    // const [status,setStatus] = useState("");
    // const [noticeperiod,setNoticeperiod] = useState("");
    // const [description,setDescription] = useState("");
    // // const [applying,setApplying]  = useState("");
    // const [file,setFile] = useState("");
    // const [data,setData] = useState([]);
    // const [message,setMessage] = useState("");
    // const [career,setCareer] = useState([]);
    // const [applyingname,setApplyingname] = useState("");
    // // const [id,setId] = useState("")
    const search = useLocation().search;
    const [errors, setErrors] = useState({file: "please sel file!"});
    useEffect(()=>{
        
        let d = new URLSearchParams(search).get('name');
        let customerData = { ...customer };
        customerData["applyingname"] = d;
        setCustomer(customerData);
        // setCustomer({applyingname:d})
        fetch('/api/career/data',{
            headers:{
                'Content-Type':"application/json",
                "Accept":"appication/json"
            },
            method:"POST",
            // body:JSON.stringify({
            //     "isapplyApi":true
            // })
        }).then(function(response){
            return response.json();
        }).then(function(myjson){
            setCustomer({career:myjson});
        })

    },[search])

    const changeHandler = (event) => {
		const objfile = event.target.files[0];
        // let customerData = { ...customer };
        // customerData["file"] = objfile;
        // setCustomer(customerData);
        // console.log(objfile)
        setCustomer({file:objfile})
        if(objfile){
            setErrors({ file: "" });
        } else {
            const errorData = {};
            errorData["file"] = "please select file";
            setErrors(errorData);
        }
	};

      const validateForm = () => {

        const schema = joi.object({
            
            // applying:joi.objectId().required(),
            applyingname:joi.string(),
            name:joi.string().required(),
            mobile_no:joi.string().length(10).pattern(/^[0-9]+$/).required(),
            email:joi.string().email({tlds:{allow: false}}).required(),
            status:joi.string().required(),
            noticeperiod:joi.string().required(),
            description:joi.string()
        }).unknown();
          
        console.log(customer)  
        const result = schema.validate(customer, { abortEarly: false });
        const { error } = result;
        
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

    let handlesubmit = async(event)=>{
        event.preventDefault()

        try{
            if(!errors.file){
                let errorFields = validateForm();
                console.log(errorFields)
                if(!errorFields)//no error fields
                {   
                    console.log("jdf")
                    let formData = new FormData();
                    // formData.append("file",file);
                    // formData.append("name",name);
                    // formData.append("mobile_no",mobile_no);
                    // formData.append("email",email);
                    // formData.append("status",status);
                    // formData.append("noticeperiod",noticeperiod);
                    // formData.append("description",description);
                    // // formData.append("applying",applying);
                    // formData.append("applyingname",applyingname);
                    formData.append("customer",customer)
                   
                    var options = {content:formData};
                    console.log(options)
                    const requiestoptions = {
                        method:'POST',
                        headers:{
                            'Accept':"application/json",
                            //  "content-type": "multipart/form-data"
                        },
                        body:formData
                    }
                    let res = await fetch('/api/careerapply',requiestoptions)
                    .then(response=> response.json())
                    .then(data =>{
                        setCustomer({data:{product:data}})
                        console.log(data)
                    })
                }
            } 
        } catch(err){
            console.log(err)        
        }
    }

    // const [career,setCareer] = useState([]);
    // const [selectcity,setSelectcity] = useState(null);
    // const [cityoption,setCityoption] = useState([]);
    // const search = useLocation().search;
    // const id = new URLSearchParams(search).get('id');
    // console.log(id)
    // useEffect(()=>{
    //     fetch('/api/career/data',{
    //         headers:{
    //             'Content-Type':"application/json",
    //             "Accept":"appication/json"
    //         },
    //         method:"POST",
    //         // body:JSON.stringify({
    //         //     "isapplyApi":true
    //         // })
    //     }).then(function(response){
    //         console.log(response);
    //         return response.json();
    //     }).then(function(myjson){
    //         setCareer(myjson);
    //         console.log(myjson)
    //     })

    // },[])

    // const {register,handleSubmit} = useForm();
    
    // const onSubmit = async(data)=>{
    //     const formData = new FormData();
    //     formData.append('file',data.file[0]);
    //     const res = await fetch('/api/careerapply',{
    //         method:"POST",
    //         body:formData,
    //     }).then((res)=>res.json());
    //     alert(JSON.stringify(`${res.message},status:${res.status}`)); 
    // };
    return(
            <div className="">
                <div className="container">
                    <div className="section-heading crumina-heading">
                        <h1 className="title">Join Our Tribe, Apply Now</h1>
                        <div className="heading-decoration">
                            <span className="first blue" />
                            <span className="second blue" />
                        </div>
                    </div>
                    <div className="margin-4-top">
                        <div className="login_box">
                            <div className="login-form">
                                <form action="" className="row" encType="multipart/form-data" onSubmit={handlesubmit}>
                                    <div className="col-lg-6">
                                        <div className=" mb-4">
                                            <div className="textfild_tile">
                                                Applying for? <span className="blue">*</span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="Enter your name here"
                                                value={customer.applyingname}
                                                readOnly
                                                
                                            />
                                            {/* <div className="select-wrapper">
                                                <select className="form-control" defaultValue={id} onChange={(e)=>{
                                                    setApplying(e.target.value)
                                                    setApplyingname(e.nativeEvent.target[e.nativeEvent.target.selectdIndex].text)
                                                    console.log(e.nativeEvent.target[e.nativeEvent.target.selectdIndex].text)
                                                    id = e.target.value}
                                                    } value={id}>
                                                    <option value="" disabled>
                                                        please select
                                                    </option>
                                                    {

                                                        career.map((value,pos)=>

                                                            <option key={pos} value={`${value._id}`} selected={id === value._id ? true:false}>{`${value.title}`}{console.log(applying,applyingname)}</option>
                                                        )
                                                        
                                                    }   
                                                        
                                                   
                                                </select>
                                            </div> */}
                                        </div>
                                        <div className="mb-4">
                                            <div className="textfild_tile">
                                                Attach your resume <span className="blue">*</span>
                                            </div>
                                            <input
                                                type="file"
                                                className="form-control"
                                                placeholder="Attach your Resume/ CV"
                                                //value={customer.file}
                                                onChange={changeHandler}
                                            />
                                            {errors.file && (
                                                <div className="alert alert-danger">
                                                    {errors.file}
                                                </div>
                                            )}
                                            
                                        </div>
                                        <div className="mb-4">
                                            <div className="textfild_tile">
                                                Your Name <span className="blue">*</span>
                                            </div>
                                            <input
                                                type="text"
                                                
                                                className="form-control"
                                                placeholder="Enter your name here"
                                                // value={customer.name}
                                                onChange={(e)=> {
                                                    let customerData = { ...customer };
                                                    customerData["name"] = e.target.value;
                                                    setCustomer(customerData); 
                                                }}
                                                
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
                                                    // value={customer.mobile_no}
                                                    onChange={(e)=> {
                                                        let customerData = { ...customer };
                                                        customerData["mobile_no"] = e.target.value;
                                                        setCustomer(customerData); 
                                                    }}
                                                    
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
                                                    //  value={customer.email}
                                                    onChange={(e)=> {
                                                        let customerData = { ...customer };
                                                        customerData["email"] = e.target.value;
                                                        setCustomer(customerData); 
                                                    }}
                                                    
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
                                                    Current Status <span className="blue">*</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    
                                                    className="form-control"
                                                    placeholder="Company"
                                                    // value={customer.status}
                                                    onChange={(e)=> {
                                                        let customerData = { ...customer };
                                                        customerData["status"] = e.target.value;
                                                        setCustomer(customerData);  
                                                    }}
                                                   
                                                />
                                                {errors.status && (
                                                <div className="alert alert-danger">
                                                    {errors.status}
                                                </div>
                                            )}
                                            </div>
                                            <div className="col-sm-6  mb-4">
                                                <div className="textfild_tile">&nbsp;</div>
                                                <input
                                                    type="text"
                                                    
                                                    className="form-control"
                                                    placeholder="Notice Period"
                                                    // value={customer.noticeperiod}
                                                    onChange={(e)=>{
                                                        let customerData = { ...customer };
                                                        customerData["noticeperiod"] = e.target.value;
                                                        setCustomer(customerData);                                                        
                                                    }}
                                                    
                                                />
                                                {errors.noticeperiod && (
                                                <div className="alert alert-danger">
                                                    {errors.noticeperiod}
                                                </div>
                                            )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className=" mb-4">
                                            <div className="textfild_tile">
                                                Why do you want to join Setblue?
                                            </div>
                                            <textarea
                                                name=""
                                                
                                                className="form-control requirement_box"
                                                placeholder="This is where you stand apart"
                                                defaultValue={""}
                                                //  value={customer.description}
                                                onChange={(e)=>setCustomer({description:e.target.value})}
                                                
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
                                            <button className="btn btn-block orange-btn" type="submit">
                                                Apply Now !
                                            </button>
                                         <div className=" mb-4"></div>   
                                            <div className="gentext gry">
                                                Alternatively you can send it to our email at
                                                hr@setblue.com
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Careerapply;