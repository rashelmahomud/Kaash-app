import React from 'react';

const Footer = () => {
    return (

        <div>
            <div className='row container-fluid bg-secondary text-white p-5'>
                <div class='col-md-3'>
                    <h3 className='fs-4 text'>SERVICES</h3>
                    <ui className='text-white text-align-left'>
                        <li className='list-group-item'>Shop Now</li>
                        <li className='list-group-item'>Blogs</li>
                        <li className='list-group-item'>Update Your Profile</li>
                        <li className='list-group-item'>Your Orders</li>
                    </ui>

                </div>
                <div class='col-md-2'>
                    <h3 className='fs-4 text'>COMPANY</h3>
                    <ui className='text-white text-align-left'>
                        <li className='list-group-item'>About us</li>
                        <li className='list-group-item'>Contact</li>
                        <li className='list-group-item'>Jobs</li>
                        <li className='list-group-item'>Press kit</li>
                    </ui>
                </div>

                <div class='col-md-3'>
                    <h3 className='fs-4 text'>LEGAL</h3>
                    <ui className='text-white text-align-left'>
                        <li className='list-group-item'>Terms of use</li>
                        <li className='list-group-item'>Privacy policy</li>
                        <li className='list-group-item'>Cookie policy</li>
                    </ui>
                </div>
                <div class='col-md-4'>
                    <h3 className='fs-4 text'>NEWSLETTER</h3>
                    <p>Enter Your Email Address..</p> <br />
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="username@site.com" aria-describedby="button-addon2" />
                        <button class="btn btn-warning" type="button" id="button-addon2">SUBSCRIBE</button>
                    </div>
                </div>


            </div>

            <p className='bg-black p-3 text-white'> Copyright © 2022 Kaash Application - All right reserved</p>
        </div>
    );
};

export default Footer;