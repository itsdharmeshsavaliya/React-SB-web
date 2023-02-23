//import { Link } from "react-router-dom";
import Careerapply from "./Carrerapply";
import { useEffect, useState } from "react";

const Career = () => {
const [careerform,setCareerForm] = useState([]);
useEffect(()=>{
    fetch('/api/careerform/data',{
        headers:{
            'Content-type':"application/json",
            'Accept':"application/json"
        },
        method:"POST"
    }).then(function(response){
        console.log(response)
        return response.json();
    }).then(function(myjson){
        setCareerForm(myjson)
    });

},[])
    return (

        <>
            <div className="wrapper">
                <div className="page-overlay" />
                <div id="header" />
                {/* end header */}
                <div className="inner-page-header" />
                <div className="inner_box_w">
                    <div className="mb-4">
                        <div className="content-resizer">
                            <div className="container">
                                <div className="section-heading crumina-heading">
                                    <h1 className="title">Content Writer</h1>
                                    <div className="heading-decoration">
                                        <span className="first blue" />
                                        <span className="second blue" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="gentext text-justify">
                                            We are looking for a Content Writer to join our IT team and
                                            enrich our websites with new blog posts, guides and marketing
                                            copy. Content Writer responsibilities include conducting
                                            thorough research on industry-related topics, generating ideas
                                            for new content types and proof reading articles before
                                            publication. If you’re familiar with producing online content
                                            and have an eye for detail, we’d like to meet you. Feel free to
                                            share samples of your work or portfolio of your published
                                            articles, along with your application.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        {/* <div className="container">
                            <ul className="nav nav-tabs text-center" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        data-toggle="tab"
                                        to="#tab01"
                                        aria-selected="true"
                                    >
                                        Key Responsibilities
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        data-toggle="tab"
                                        to="#tab02"
                                        aria-selected="false"
                                    >
                                        Requirements
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        data-toggle="tab"
                                        to="#tab03"
                                        aria-selected="false"
                                    >
                                        Qualification
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        data-toggle="tab"
                                        to="#tab04"
                                        aria-selected="false"
                                    >
                                        Experience
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="container">
                            <ul className="nav nav-tabs text-center" id="myTab" role="tablist">
                                {
                                    careerform.map((value,pos)=>{
                                        return(
                                            <li className="nav-item" key={pos}>
                                                <a className={"nav-link " + ((pos === 0) ? 'active' : '')} data-toggle="tab" href={`#tab${pos}`} aria-selected={ (pos === 0) ? 'true' : 'false'}>{value.category}</a>
                                            </li>
                                        )
                                    })
                                }
                               

                                {/* <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab02" aria-selected="false">Requirements</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab03" aria-selected="false">Qualification</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#tab04" aria-selected="false">Experience</a>
                                </li> */}

                            </ul>
                </div>
                        <div className="tab-content" id="myTabContent">
                            {
                                careerform.map((value,pos)=>
                                    <div className={"tab-pane fade "  + ((pos === 0) ? 'show active' : '')} id={`tab${pos}`} key={pos}>
                                    <div className="container">
                                        <div className="mt-4">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p className="pd_text text-justify"></p>
                                                    <div className="career_option gentext">
                                                        <ul>
                                                            {value.points.map((val,pos)=>
                                                                <li key={pos}>{val}</li>
                                                            )}
                                                            
                                                            {/* <li>
                                                                Write clear marketing copy to promote our
                                                                products/services
                                                            </li>
                                                            <li>
                                                                Prepare well-structured drafts using Content Management
                                                                Systems
                                                            </li>
                                                            <li>Proofread and edit blog posts before publication</li>
                                                            <li>Submit work to editors for input and approval</li>
                                                            <li>
                                                                Coordinate with marketing and design teams to illustrate
                                                                articles
                                                            </li>
                                                            <li>
                                                                Conduct simple keyword research and use SEO guidelines
                                                                to increase web traffic
                                                            </li>
                                                            <li>Promote content on social media</li>
                                                            <li>
                                                                Identify customers’ needs and gaps in our content and
                                                                recommend new topics
                                                            </li>
                                                            <li>
                                                                Ensure all-around consistency (style, fonts, images and
                                                                tone)
                                                            </li>
                                                            <li>Update website content as needed</li> */}
                                                        </ul>
                                                    </div>
                                                    <p />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )
                            }
                            
                            {/* <div className="tab-pane fade" id="tab02">
                                <div className="container">
                                    <div className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p className="pd_text text-justify"></p>
                                                <div className="career_option gentext">
                                                    <ul>
                                                        <li>
                                                            Proven work experience as a Content Writer, Copywriter
                                                            or similar role
                                                        </li>
                                                        <li>Portfolio of published articles</li>
                                                        <li>Experience doing research using multiple sources</li>
                                                        <li>Familiarity with web publications</li>
                                                        <li>Excellent writing and editing skills in English</li>
                                                        <li>
                                                            Hands-on experience with Content Management Systems
                                                            (e.g. Word Press)
                                                        </li>
                                                        <li>Ability to meet deadlines</li>
                                                        <li>
                                                            Research industry-related topics (combining online
                                                            sources, interviews and studies)
                                                        </li>
                                                    </ul>
                                                </div>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab03">
                                <div className="container">
                                    <div className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p className="pd_text text-justify"></p>
                                                <div className="career_option gentext">
                                                    <ul>
                                                        <li>Bachelors in journalism, English or related field</li>
                                                    </ul>
                                                </div>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab04">
                                <div className="container">
                                    <div className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p className="pd_text text-justify"></p>
                                                <div className="career_option gentext">
                                                    <ul>
                                                        <li>0-4 Years</li>
                                                    </ul>
                                                </div>
                                                <p />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <Careerapply/>
                </div>
                <div id="footer" />
                {/* end footer*/}
            </div>

        </>

    )


}

export default Career;

