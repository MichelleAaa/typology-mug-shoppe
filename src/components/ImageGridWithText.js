
import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import {ImgGridWithTextData } from "../pages/home/HomeData";
// import img1 from '../assets/page-img/esfj-table.png';
// import img2 from '../assets/page-img/intj-leaves.png';
// import img3 from '../assets/page-img/infp-pour-cropped.png';
// import Button from './Button';

const ImgGridWithText = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row pt-1 pt-md-5 d-flex justify-content-center align-items-center">
                    <div className="col-11 col-xl-6 mt-5 text-center">
                        <h2 className="jumbotron-subheader">{ImgGridWithTextData.title}</h2>
                        <h3 className="px-lg-3 mb-3">{ImgGridWithTextData.subtitle}</h3>
                        <p className="mx-lg-5 mt-2 ">{ImgGridWithTextData.text1}</p>
                        <p className="mx-lg-5 mt-2 ">{ImgGridWithTextData.text2}</p>
                    </div>
                    <div className="col-11 col-xl-6">
                        <div className="row">
                            <div className="col-6">
                                <img src={ImgGridWithTextData.img1} className='img-grid-1'></img>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className='col-12'>
                                            <img src={ImgGridWithTextData.img2} className='img-grid-2 img-fluid'></img>
                                            <img src={ImgGridWithTextData.img3} className='img-grid-3 img-fluid'></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='diamond-clip-wrapper'> 
                <div className="diamond-clip-left"></div>
            </div>
        </>
    );
}

export default ImgGridWithText;