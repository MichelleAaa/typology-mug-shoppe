import React, { Component }  from 'react';
import { IconContext}  from 'react-icons';
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';

const SingleCard = ({cardInfo}) => {
    return (
        <div className="col-12 col-md-6 col-xl-3 mb-3">
        <Card>
                <CardBody className="text-center">
                    { cardInfo.icon ? <Icon cardInfo={cardInfo} /> : <Image cardInfo={cardInfo} /> }
                    
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

const Icon = ({cardInfo}) => {
    return(
        <IconContext.Provider value={{className: "icon"}}>      
            {cardInfo.icon}
        </IconContext.Provider>
    );
}

const Image = ({cardInfo}) => {
    return (
        <CardImg top src={cardInfo.img} alt={cardInfo.alt} className="card-img mb-2" />
    );
}

export default SingleCard;