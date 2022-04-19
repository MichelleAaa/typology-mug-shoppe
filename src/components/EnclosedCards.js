
import React, { Component }  from 'react';
import {  CardGroup } from 'reactstrap';
import { HomeCardsData } from '../pages/home/HomeData';
import { NavLink } from 'react-router-dom';
// import img1 from '../assets/page-img/esfj-table.png';
// import img2 from '../assets/page-img/intj-leaves.png';
// import img3 from '../assets/page-img/infp-pour-cropped.png';
// import Button from './Button';
import SingleCard from './SingleCard';

const EnclosedCards = () => {
    return (
        <>
        {/* <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-left"></div>
        </div> */}
        <div className='container-fluid'>
            <div className="row mx-1 mx-lg-1 mx-xl-2 d-flex justify-content-center">
                <div className='col-12 col-sm-11 cards-container'>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-11 text-center">
                            <h1 className='pt-5 mb-3 text-heading'>The Perspective Categories</h1>
                        </div>
                        <div className="col-10 col-sm-9 col-lg-8 text-center">
                            <h5>The four basic types of perspectives theorized by Carl Jung laid the foundation for what later became the 16-type personality model. Each perspective has both an introverted and extroverted expression.</h5>
                            
                        </div>
                        <CardGroup className="pt-2 pb-5 my-5 px-4">
                            {
                                HomeCardsData.map(card => <SingleCard key={card.id} cardInfo={card}/>)
                            }
                        </CardGroup>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-right"></div>
        </div> */}
        <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-right"></div>
        </div>
        </>
    );
}



export default EnclosedCards;