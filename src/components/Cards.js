
import React, { Component }  from 'react';
import { IconContext}  from 'react-icons';
import {  CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { HomeCardsData } from '../pages/home/HomeData';
import { NavLink } from 'react-router-dom';
// import img1 from '../assets/page-img/esfj-table.png';
// import img2 from '../assets/page-img/intj-leaves.png';
// import img3 from '../assets/page-img/infp-pour-cropped.png';
// import Button from './Button';

const Cards = () => {
    return (
        <>
        {/* <div className='diamond-clip-wrapper'> 
            <div className="diamond-clip-left"></div>
        </div> */}
        <div className='container-fluid '>
            <div className="row mx-1 mx-lg-1 mx-xl-2 cards-container d-flex justify-content-center">
                <div className="col-12 text-center">
                    <h1 className='pt-5 mb-3 text-heading'>The Cognitive Process Categories</h1>
                </div>
                <div className="col-10 col-sm-9 col-lg-8 text-center">
                    <h5>The four basic types of cognitive processes theorized by Carl Jung laid the foundation for what later became the 16-type personality model. Each process has both an introverted and extroverted expression.</h5>
                </div>
                <CardGroup className="pt-2 pb-5 my-5 px-4">
                    {
                        HomeCardsData.map(card => <SingleCard key={card.id} cardInfo={card}/>)
                    }
                </CardGroup>
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

const SingleCard = ({cardInfo}) => {
    return (
        <div className="col-12 col-md-6 col-xl-3 mb-4">
        <Card>
                <CardBody className="text-center">
                    <IconContext.Provider value={{className: "icon"}}>      {cardInfo.icon}
                    </IconContext.Provider>
                    <CardTitle tag="h5">
                        <h2>{cardInfo.title}</h2>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {cardInfo.subtitle}
                    </CardSubtitle>
                    <CardText>
                        {cardInfo.text}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Cards;