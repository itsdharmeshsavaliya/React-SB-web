import React from "react";
// import { Link } from "react-router-dom";
import {

    Box,
    // Link,
    // Table,
    // TableBody,
    // TableHead,
    // TableRow,
    // TableCell,
    // Button,


} from '@mui/material';
import { useState } from "react";
import { useEffect } from "react";
const Toggle = () => {
    const [toggle,setToggle] = useState([]);
    useEffect(()=>{
        fetch('/api/telentfaq/data',{
            headers:{
                "Content-Type":"application/json",
                "accept":"application/json"
            },
            method:"POST"
        }).then(function(response){
            return response.json()
        }).then(function(myjson){
            setToggle(myjson)
            console.log(myjson)
        })
    },[])
    return (
        <>
            <Box className="container">
                <h2 className="section-title">How to get started?</h2>
                <p className="section-desc">
                    A platform that takes care of everything beforehand. Setblue sources, vets,
                    <br />
                    matches and manages all the talents.
                </p>
                <Box className="toggle">
                    <Box className="row">
                        <Box className="col-lg-6">
                            <Box className="accordion" id="accordionExample">
                                {
                                    toggle.map((value,pos)=>{
                                        return(
                                            <Box className="accordion-item" key={pos}>
                                                <h2 className="accordion-header" id={`heading${pos}`}>
                                                    <Box className="121">
                                                        <button
                                                            className={"accordion-button " +((pos !== 0)?"collapsed":"")}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${pos}`}
                                                            aria-expanded={(pos === 0) ? "true" : "false"}
                                                            aria-controls={`collapse${pos}`}
                                                        >
                                                            <span>{pos+1}</span>
                                                            <p>{value.title}</p>
                                                        </button>
                                                    </Box>

                                                </h2>
                                                <Box
                                                    id={`collapse${pos}`}
                                                    className={`accordion-collapse collapse  ${((pos === 0)?"show":"")}`}
                                                    aria-labelledby={`heading${pos}`}
                                                    data-bs-parent="#accordionExample"
                                                >
                                                    <Box className="accordion-body">
                                                        <strong>
                                                            {value.description}
                                                        </strong>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                                
                                {/* <Box className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <Box className="121">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                <span>2</span>
                                                <p>Review &amp; Shortlist the Matches</p>
                                            </button>
                                        </Box>
                                    </h2>
                                    <Box
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <Box className="accordion-body">
                                            <strong>
                                                We'll match the best-fitted profile(s) in the next 48 hours for
                                                your review. You shortlist and share the time slots for us to
                                                schedule interviews.
                                            </strong>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="accordion-item">
                                    <Box className="121">
                                        <h2 className="accordion-header" id="headingThree">
                                            <Box className="121">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    <span>3</span>
                                                    <p>Interview &amp; Hire</p>
                                                </button>
                                            </Box>
                                        </h2>
                                        <Box
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <Box className="accordion-body">
                                                <strong>
                                                    Assess them until you are confident and provide feedback.
                                                </strong>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="accordion-item">
                                        <h2 className="accordion-header" id="headingfive">
                                            <Box className="121">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefive"
                                                    aria-expanded="false"
                                                    aria-controls="collapsefive"
                                                >
                                                    <span>4</span>
                                                    <p> Onboard &amp; Manage</p>
                                                </button>
                                            </Box>
                                        </h2>
                                        <Box
                                            id="collapsefive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingfive"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <Box className="accordion-body">
                                                <strong>
                                                    We'll sort all the legalities and contracts with the talent,
                                                    ensure a smooth onboarding and help you manage the talent.
                                                </strong>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box> */}
                            </Box>
                        </Box>
                        <Box className="col-lg-6">
                            <Box className="manage-lists">
                                <ul>
                                    <li className="manage-list">
                                        <figure>
                                            <img
                                                decoding="async"
                                                src="images/resume/check.png"
                                                alt="correct"
                                                style={{ width: 37 }}
                                            />
                                        </figure>
                                        <p>Top 4.5% Talent Network</p>
                                    </li>
                                    <li className="manage-list">
                                        <figure>
                                            <img
                                                decoding="async"
                                                src="images/resume/check.png"
                                                alt="correct"
                                                style={{ width: 37 }}
                                            />
                                        </figure>
                                        <p>99+ High-in-demand Tech Skills</p>
                                    </li>
                                    <li className="manage-list">
                                        <figure>
                                            <img
                                                decoding="async"
                                                src="images/resume/check.png"
                                                alt="correct"
                                                style={{ width: 37 }}
                                            />
                                        </figure>
                                        <p>75% First Interview Selection Rate</p>
                                    </li>
                                    <li className="manage-list">
                                        <figure>
                                            <img
                                                decoding="async"
                                                src="images/resume/check.png"
                                                alt="correct"
                                                style={{ width: 37 }}
                                            />
                                        </figure>
                                        <p>99% Job Acceptance Ratio</p>
                                    </li>
                                    <li className="manage-list">
                                        <figure>
                                            <img
                                                decoding="async"
                                                src="images/resume/check.png"
                                                alt="correct"
                                                style={{ width: 37 }}
                                            />
                                        </figure>
                                        <p>2X Employee Retention Rate</p>
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

export default Toggle;