import React, { Component }  from 'react';
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import { formatPrice } from '../utils/FormatPrice';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductsGrid = ({productsData}) => {
    return (
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center align-items-center mx-5">
                { productsData.map(product => <Product key={product.id} product={product}/> ) }
            </div>
        </div>
    );
}

const Product = ({product}) => {
    return (
        <>
            <div className='col-3 px-3'>
                <div className="d-flex flex-column justify-content-center">
                    {/* <Link to={`/products/${product.id}`} className='link'>
                    </Link> */}
                    <div className='wrapper-product-img'>
                        <img src={product.img} alt={product.name} className="products-grid-img"/>
                        <div className="overlay">
                            <BiSearchAlt size='100px' className='hidden' />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>{product.name}</h5>
                        <p>{formatPrice(product.price)}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ProductsGrid;