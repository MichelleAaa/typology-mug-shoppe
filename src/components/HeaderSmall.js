
import React, { Component }  from 'react';
// import {  Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import img1 from '../assets/page-img/esfj-table.png';
// import img2 from '../assets/page-img/intj-leaves.png';
// import img3 from '../assets/page-img/infp-pour-cropped.png';
import Button from './Button';
import { HeaderButton } from '../pages/home/HomeData';

const HeaderSmall = () => {
    return (
        <>
        <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-left"></div>
        </div>
            <div className="container-fluid">
                <div className="row pt-1 pt-md-5 d-flex justify-content-center align-items-center header-small">
                    <div className="col-12 col-md-5 col-xl-6 mt-5 text-center">
                        {/* <h1 className="jumbotron-header">Typology</h1> */}
                        <h2 className="jumbotron-subheader">Products</h2>
                        <h3 className="px-lg-3 mb-3">Browse our wide selection of mugs below.</h3>
                        <p className="mx-lg-5 mt-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates deleniti cum rem a?</p>
                        {/* <p className="mx-lg-5 mt-2 d-block d-md-none d-xl-block jumbotron-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates deleniti cum rem a? Sit beatae labore id. Minima cumque vel eum harum enim tempore explicabo doloremque laudantium magni molestias.</p> */}
                        {/* <Button buttonData={HeaderButton}/> */}
                        </div>
                </div>
                
            </div>
        </>
    );
}

export default HeaderSmall;