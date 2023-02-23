import React from 'react'

const ScrollToTop = () => {

    const ReturnTop = () => {
     window.scrollTo({top: 0, left:0, behavior:'smooth'});   
    }
  return (
    <>
    <div className='text-end'>
        <button className='btn btn-danger' onClick={ReturnTop}>
        
        <i className="fa fa-arrow-up"></i>
        </button>
    </div>
    </>
  )
}

export default ScrollToTop