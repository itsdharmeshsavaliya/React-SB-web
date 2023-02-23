import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { 
    
    Box,
    Table,
    TableBody,
    TableHead, 
    TableRow,
    TableCell,
    Button,
    

} from '@mui/material';

// import  { useState } from 'react'
// import { Rating } from 'react-simple-star-rating'
import Rating from '@mui/material/Rating';


const Talent = () => {
   const [talent,setTalent] = useState([]);
   useEffect(()=>{
        fetch("/api/userprofile/data",{
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            method:"POST"
        }).then(function(response){
            return response.json()
        }).then(function(myjson){
            setTalent(myjson)
            console.log(myjson)
        })
   },[])

    return (
        <>
        <Box className="abc">
           
             
            <Box className="table-wrapper">
                <h2>Talent Profiles</h2>
                <p className="section-desc">
                    Check to see what fits - this is what the top talent from India looks like.
                </p>
                <Table className="fl-table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Skill</TableCell>
                            <TableCell scope="col" className='text-center'>
                                Years of 
                                Exp.
                            </TableCell>
                            <TableCell scope="col">
                                Communication 
                                Score
                            </TableCell>
                            <TableCell scope="col" className='text-center'>
                                Technical 
                                Score
                            </TableCell>
                            <TableCell className='text-center'>Profile</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            talent.map((value,pos)=>{
                                return(
                                    <TableRow key={pos}>
                                        <TableCell>
                                            <img src={value.image} className="rounded-circle" alt="" />
                                            <span className="m-3">{value.name}</span>
                                        </TableCell>
                                        <TableCell>{value.skill}</TableCell>
                                        <TableCell className='text-center'>{value.experience}</TableCell>
                                        {/* <td>6</td> */}
                                        <TableCell>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={value.communication_score} readOnly />
                                        </TableCell>
                                        <TableCell>
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={value.technical_score} readOnly />
                                        </TableCell>
                                        <TableCell>
                                            
                                            <Link to={`/Resume?id=${value._id}`} target="_blank" className='text-decoration-none'>
                                                <Button type="button" className="btn btn-sm btn-warning">
                                                    View
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                        
                        {/* <TableRow>
                            <TableCell>
                            
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>WordPress Developer</TableCell>
                            <TableCell className='text-center'>7</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4.3} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                                
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                               
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>Paid Search Analyst</TableCell>
                            <TableCell className='text-center'>5</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                                
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>React Native Developer</TableCell>
                            <TableCell className='text-center'>8</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                              
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>Sr. WordPress Developer</TableCell>
                            <TableCell className='text-center'>7</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                                
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>                            
                            </TableCell>
                            <TableCell>WordPress Developer</TableCell>
                            <TableCell className='text-center'>5</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                               
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>Performance Marketing Analyst</TableCell>
                            <TableCell className='text-center'>7</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                                
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                              
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>Paid Social Analyst</TableCell>
                            <TableCell className='text-center'>5</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                                
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>Paid Search Analyst</TableCell>
                            <TableCell className='text-center'>4</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /> 
                            </TableCell>
                            <TableCell>
                               
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            
                                <img src="./images/12122.jpg" className="rounded-circle" alt="" />
                                <span className="m-3">Rahul Dhangar</span>
                            </TableCell>
                            <TableCell>Full-Stack Web Developer</TableCell>
                            <TableCell className='text-center'>6</TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                            <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                            </TableCell>
                            <TableCell>
                                
                                <Link to="/Resume" target="_blank" className='text-decoration-none'>
                                    <Button type="button" className="btn btn-sm btn-warning">
                                        View
                                    </Button>
                                </Link>
                            </TableCell>
                        </TableRow> */}
                    </TableBody>
                    
                </Table>
            </Box>
        </Box>
        </>
    )
}

export default Talent;