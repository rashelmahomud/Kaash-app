import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
      <div className='container'>
          <div className='row'>
            <h1 className='mt-5 pt-5 text-warning'>OUR SERVICES</h1>

                {
                    services.map(service => <>

                    <div className='col-lg-4 col-sm-12 col-md-6 mx-auto m-3 box'>
                    <Service service={service}></Service>  
                    </div>
                    
                    </>)
                }
         

        </div>
      </div>
    );
};

export default Services;