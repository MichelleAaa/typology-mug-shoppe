import React, { Component }  from 'react';
import {  Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import { formatPrice } from '../utils/FormatPrice';
// import { BiSearchAlt } from 'react-icons/bi';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductsGrid = ({productsData}) => {
    return (
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center align-items-center mx-1 mx-md-3 mx-lg-5 px-md-5">
                { productsData.map(product => <Product key={product.id} product={product}/> ) }
            </div>
        </div>
    );
}

const Product = ({product}) => {
    return (
        <>
            <div className='col-6 col-sm-6 col-md-4 col-xl-3 p-0'>
                <div className="d-flex flex-column justify-content-center">
                    {/* <Link to={`/products/${product.id}`} className='link'>
                    </Link> */}
                    <div className='wrapper-product-img'>
                        <img src={product.img} alt={product.name} className="products-grid-img"/>

                                {/* <h5 className='text-wrapper-1'>{product.name}</h5> */}
                                <h5 className="text-wrapper-2">{formatPrice(product.price)}</h5>

                        <div className="overlay">
                            <BiSearchAlt2 size='50px' className='hidden' />
                        </div>
                    </div>
                    {/* <div classname="text-wrapper-2">
                            <div className="d-flex justify-content-between align-items-end product-text">
                                <h5>{product.name}</h5>
                                <h5>{formatPrice(product.price)}</h5>
                            </div>
                        </div> */}
                </div>
            </div>
        </>
    );
}


export default ProductsGrid;