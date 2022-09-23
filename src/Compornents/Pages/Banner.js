import React from 'react';
import { Button } from 'react-bootstrap';
import banner from '../../Assactes/img/fsd.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner container-fluid mt-0'>
      
      <div className='row mb-5'>

        <div className='col-sm-12 col-md-12 col-lg-6'>
          <h1 className='display-1 font-weight-bold mt-5'>WELCOME TO <br /> <span className='text-warning'>KAASH</span></h1>
          <p className='font-weight-light'>The online learning industry is growing by 15% annually</p>
          <p className=' font-weight-light' >e-Learning is quickly becoming the preferred way to learn.</p>

          <Button className='bg-warning'>ENROLL NOW</Button>

        </div>

        <div className='col-sm-12 col-md-12 col-lg-6'>
          <img className="img-fluid mt-5 mb-5" src={banner} alt='img' />

        </div>

      </div>
      </div>
   




  );
};

export default Banner;