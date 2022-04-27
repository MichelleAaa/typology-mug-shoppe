
import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { HeaderButton } from '../pages/home/HomeData';

const HeaderSmall = ({ headerData }) => {
    return (
        <>
        <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-left"></div>
        </div>
        <div className="mt-5">
            <div className="container-fluid pt-4 header-small">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-12 col-sm-10 col-md-10 col-lg-4 col-xl-4 text-center d-flex justify-content-between">
                        <img src={headerData.img3} className='header-small-img'></img>
                        <img src={headerData.img1} className='header-small-img'></img>
                        <img src={headerData.img2} className='header-small-img'></img>
                    </div>
                    <div className="col-12 col-sm-10 col-md-6 col-xl-7 text-center mt-1 mt-xl-5">
                        <h2 className="">{headerData.title}</h2>
                        <h3 className="px-lg-3 mb-3">{headerData.subtitle}</h3>
                        <p className="mx-lg-5 mt-2 ">{headerData.text}</p>
                        {headerData.button && <Button buttonData={headerData.button}/>}
                        </div>
                    
                </div>
                
            </div>
            </div>
        </>
    );
}

export default HeaderSmall;