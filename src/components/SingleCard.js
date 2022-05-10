import React  from 'react';
import { useDispatch } from 'react-redux';
import { IconContext}  from 'react-icons';
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import { filterProducts, removeAllFilters, renderFilter } from '../redux/productsSlice';
import { Link } from 'react-router-dom';

const SingleCard = ({cardInfo }) => {
    return (
        <article className="col-12 col-md-6 col-xl-3 mb-3">
                <Card>
                    <CardBody className="text-center">
                        { cardInfo.icon ? <Icon cardInfo={cardInfo} /> : <Image cardInfo={cardInfo} /> }
                        
                        <CardTitle tag="h5">
                            <p className='card-title'>{cardInfo.title}</p>
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
        </article>
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
    let dispatch = useDispatch();
    
    const HandleLinkClick = (type) => {
        dispatch(removeAllFilters());
        dispatch(filterProducts(type));
        dispatch(renderFilter()); 
    }

    return (
        <Link to="/products/" onClick={() => HandleLinkClick(cardInfo.title)}>
            <div className='card-img-wrapper'>
            <CardImg top src={cardInfo.img} alt={`${cardInfo.title} Mug`} className="card-img mb-2" />
            </div>
        </Link>
    );
}

export default SingleCard;