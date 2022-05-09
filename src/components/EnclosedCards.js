import React from 'react';
import {  CardGroup } from 'reactstrap';
import { HomeCardsData } from '../pages/home/HomeData';
import SingleCard from './SingleCard';

const EnclosedCards = () => {
    return (
        <>
        <div className='container-fluid'>
            <div className="row mx-1 mx-lg-1 mx-xl-2 d-flex justify-content-center">
                <div className='col-12 col-sm-11 cards-container'>
                    <div className='row d-flex justify-content-center'>
                        <div className="col-11 text-center">
                            <h2 className='pt-5 mb-3 text-heading'>The Perspective Categories</h2>
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
        </>
    );
}



export default EnclosedCards;