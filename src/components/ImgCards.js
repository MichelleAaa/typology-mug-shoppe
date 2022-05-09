
import React  from 'react';
import {  CardGroup } from 'reactstrap';
import SingleCard from './SingleCard';

const ImgCards = ({ cardsData }) => {
    return (
        <>
        <div className='container-fluid'>
            <div className="row mx-1 mx-lg-1 mx-xl-2 d-flex justify-content-center">
                <div className='col-12 col-sm-11'>
                        <CardGroup className="pt-2 pb-1 my-5 px-4 justify-content-center">
                            {
                                cardsData.map(card => <SingleCard key={card.id} cardInfo={card} />)
                            }
                        </CardGroup>
                    </div>
                </div>
            </div>
        </>
    );
}



export default ImgCards;