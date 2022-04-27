
import React, { Component }  from 'react';
import {  CardGroup } from 'reactstrap';
import { HomeCardsData } from '../pages/home/HomeData';
import { NavLink } from 'react-router-dom';
// import img1 from '../assets/page-img/esfj-table.png';
// import img2 from '../assets/page-img/intj-leaves.png';
// import img3 from '../assets/page-img/infp-pour-cropped.png';
// import Button from './Button';
import SingleCard from './SingleCard';

const ImgCards = ({cardsData}) => {
    return (
        <>
        {/* <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-left"></div>
        </div> */}
        <div className='container-fluid'>
            <div className="row mx-1 mx-lg-1 mx-xl-2 d-flex justify-content-center">
                <div className='col-12 col-sm-11'>
                        <CardGroup className="pt-2 pb-1 my-5 px-4 justify-content-center">
                            {
                                cardsData.map(card => <SingleCard key={card.id} cardInfo={card}/>)
                            }
                        </CardGroup>
                    </div>
                </div>
            </div>
        {/* <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-right"></div>
        </div> */}
        {/* <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-right"></div>
        </div> */}
        </>
    );
}



export default ImgCards;