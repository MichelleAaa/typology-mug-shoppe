import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { ImFacebook2, ImYoutube2, ImPhone } from 'react-icons/im';
import { HiMailOpen } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container-fluid">
                <div className="row px-0 pt-4 d-flex justify-content-start mx-0">
                    <div className="col-10 col-md-2">
                        <ul className="list-unstyled footer-item">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Mugs</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-7 col-lg-5 col-xl-3 text-right d-flex align-items-start justify-content-left">
                        <div className="text-left footer-item">
                            <a role="button" className="contact-links" href="tel:+12345678901"><ImPhone color='black' /> {" "}
                                1-234-567-8901</a><br />
                            <a role="button" className="contact-links" href="mailto:office@labustours.com"><HiMailOpen color='black' />
                                {" "}admin@tmugs.com</a><br />
                        </div>
                    </div>
                    <div className='col-12 col-md-3 col-lg-5 col-xl-7 pr-4'>
                        <div className='row'>
                        <div className="col-12 pl-0 ml-0 d-flex align-items-end justify-content-end">
                            <div className="row d-flex justify-content-end justify-content-md-center align-items-center">
                                    <div className='col-2 col-md-5 col-lg-2'>
                                        <a className="btn mr-1" href="http://instagram.com/"><FaInstagramSquare size='46px' /></a>
                                    </div>
                                    <div className='col-2 col-md-5 col-lg-2'>
                                        <a className="btn mr-1" href="http://facebook.com/"><ImFacebook2 size='40px' /></a>
                                    </div>
                                    <div className='col-2 col-md-5 col-lg-2'>
                                        <a className="btn mr-1" href="http://twitter.com/"><FaTwitterSquare size='46px' /></a>
                                    </div>
                                    <div className='col-2 col-md-5 col-lg-2'>
                                        <a className="btn mr-1" href="http://youtube.com/"><ImYoutube2 size='46px' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pl-0 ml-0 pb-1">
                    <div className="col-sm-12 pb-1 copyright text-right text-md-center">
                        <p>&copy; Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;