
import React, { Component }  from 'react';
// import {  Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import img1 from '../assets/page-img/esfj-table.png';
// import img2 from '../assets/page-img/intj-leaves.png';
import img3 from '../assets/page-img/infp-pour-cropped.png';
import Button from './Button';
import img2 from '../assets/page-img/intj-leaves.png';
import { HeaderButton } from '../pages/home/HomeData';

const HeaderSmall = () => {
    return (
        <>
        <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-left"></div>
        </div>
        <div className="mt-5">
            <div className="container-fluid pt-4 header-small">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-12 col-sm-10 col-md-10 col-lg-4 col-xl-4 text-center d-flex justify-content-between">
                        {/* <img src={img2} className='products-grid-img header-small-img'></img> */}
                        <img src={img3} className='header-small-img'></img>
                        <img src={img1} className='header-small-img'></img>
                        <img src={img2} className='header-small-img'></img>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-xl-7 text-center mt-1 mt-xl-5">
                        {/* <h1 className="jumbotron-header">Typology</h1> */}
                        <h2 className="jumbotron-subheader">Products</h2>
                        <h3 className="px-lg-3 mb-3">Browse our wide selection of mugs below.</h3>
                        <p className="mx-lg-5 mt-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates deleniti cum rem a?</p>
                        {/* <p className="mx-lg-5 mt-2 d-block d-md-none d-xl-block jumbotron-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates deleniti cum rem a? Sit beatae labore id. Minima cumque vel eum harum enim tempore explicabo doloremque laudantium magni molestias.</p> */}
                        {/* <Button buttonData={HeaderButton}/> */}
                        </div>
                    
                </div>
                
            </div>
            </div>
        </>
    );
}

export default HeaderSmall;