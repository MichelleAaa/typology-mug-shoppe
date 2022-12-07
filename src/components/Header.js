
import React from 'react';
import {  Jumbotron } from 'reactstrap';
import img1 from '../assets/page-img/esfj-table.png';
import img2 from '../assets/page-img/intj-leaves.png';
import img3 from '../assets/page-img/infp-pour-cropped.png';
import Button from './Button';
import { HeaderButton } from '../pages/home/HomeData';

const Header = () => {
    
    return (
        <React.Fragment>
            <div className='diamond-clip-wrapper'> 
                <div className="diamond-clip-left"></div>
            </div>
            <header>
                <Jumbotron fluid>
                    <div className="container-fluid">
                        <div className="row pt-1 pt-md-2 d-flex justify-content-left align-items-center">
                            <div className="col-12 col-md-6 col-lg-7 col-xl-6 mt-5 pl-xl-5 d-flex justify-content-around">
                                <img src={img3} className='header-img d-none d-lg-block' alt='cup'></img>
                                <img src={img1} className='header-img' alt='cup'></img>
                                <img src={img2} className='header-img d-none d-md-block' alt='cup'></img>
                            </div>
                            
                            <div className="col-12 col-md-5 col-xl-6 mt-5 text-center">
                                <h1 className="jumbotron-header">Typology</h1>
                                <h2 className="jumbotron-subheader text-nowrap">Mug Shoppe</h2>
                                <h3 className="px-lg-3 mb-3 jumbotron-subtext">The best way to share your personality preference without saying a word.</h3>
                                <p className="mx-lg-5 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates deleniti cum rem a?</p>
                                <p className="mx-lg-5 mt-2 d-block d-md-none d-xl-block jumbotron-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam voluptates deleniti cum rem a? Sit beatae labore id. Minima cumque vel eum harum enim tempore explicabo doloremque laudantium magni molestias.</p>
                                <Button buttonData={HeaderButton}/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </header>
        </React.Fragment>
    );
}

export default Header;