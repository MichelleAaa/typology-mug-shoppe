import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Button  } from 'reactstrap';
import { FormatPrice } from '../utils/FormatPrice';
import { BsCheck2All } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { TypeNameDetail } from '../pages/products/ProductsData';
import SubscriptionSmall from "./SubscriptionSmall";

const SingleProduct = () => {
    const { productId } = useParams();

    const product = useSelector(state => state.products.productList).find((product) => product.id === parseInt(productId));

    const dispatch = useDispatch();

    const HandleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <React.Fragment>
            <main className='container-fluid py-5 mt-4'>
                <div className='row'>
                    <div className='col-12 d-flex justify-content-start pt-2'>
                        <button className="btn btn-main outline-btn">
                            <Link to='/products/' className='outline-link'>
                            Back to Products
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='row mt-5 d-flex justify-content-center px-2 px-md-5 px-lg-1'>
                    <div className='col-12 col-lg-6 col-xl-5'>
                        <ProductImgGrid images={product.img} />
                    </div>
                    <div className='col-12 col-lg-6 col-xl-5 mt-5 mt-lg-0'>
                        <h1 className='product-header'>{product.name}</h1>
                        <p>{product.description}</p>
                        <p><strong>Availability:</strong> {product.stock} in stock</p>
                        <p><strong>Price:</strong> {FormatPrice(product.price)}</p>
                        <hr />
                        { product.stock > 0 ? 
                        <React.Fragment>
                            <button type='button' className={"mt-4 btn btn-main outline-btn"} 
                            onClick={() => {HandleAddToCart(product);
                            toggle();}}> 
                            Add to Cart
                            </button>
                            <Modal isOpen={modal} toggle={toggle} className=''>
                                <ModalHeader toggle={toggle}> 
                                <div className='d-flex flex-row justify-content-center align-items-center'>
                                    <BsCheck2All color='green' margin='auto' /> 
                                    <p className='my-auto'>Added to Cart:</p>
                                </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={product.img[0].img} alt='Cup' className='product-modal-img' />
                                        <p className='pl-3 product-modal-text'>{product.name}</p>
                                </div>
                                </ModalBody>
                                <ModalFooter>
                                <button className="btn btn-main outline-btn">
                                    <Link to='/cart/' className='outline-link'>
                                    Go to Cart
                                    </Link>
                                </button> 
                                <Button color="btn btn-main outline-btn" onClick={toggle}>Continue Shopping</Button>
                                </ModalFooter>
                            </Modal>
                        </React.Fragment>
                        : 
                        <button type='button' className="mt-4 btn btn-main"> Subscribe to our Newsletter to be Notified when this Product is Available</button>}
                    </div>
                </div>
            </main>
            <ProductDetail product={product} />
            <SubscriptionSmall />
        </React.Fragment>
    );
}

const ProductImgGrid = ({ images }) => {
    const [main, setMain] = useState(images[0]);

    return (
        <React.Fragment>
            <img src={main.img} alt='Cup' className='product-main-img' />
            <div className='product-thumbnail-gallery my-4'>
            {
                images.map(image => {
                return (
                    <img src={image.img} alt={image.alt} key={image.id} onClick={() => setMain(images[image.id - 1])} className={`${image.id === main.id ? 'product-thumbnail-img active-img' : 'product-thumbnail-img'}`}/>
                )})
            }
            </div>
        </React.Fragment>
    );
}

const ProductDetail = ( {product} ) => {
    return (
        <div className='container py-4 my-4'>
            <div className='row mt-1 mx-1 mx-lg-5 py-5 d-flex justify-content-around px-2 px-md-5 px-lg-1 product-detail'>
                <div className='col-12 col-lg-6 col-xl-5 pb-4 pb-lg-0 d-flex flex-column justify-content-center'>
                        <h2 className='pb-4 pb-xl-5 text-center jumbotron-subheader'>Type Letter Meaning</h2>
                        {<TypeDetail product={product}/>}
                </div>
                <div className='col-12 col-lg-6 col-xl-5 d-flex align-items-center'>
                        <img src={product.img[0].img} alt='Cup' className='product-second-img' />
                </div>
            </div>    
        </div>
    );
}

const TypeDetail = ( {product}) => {
    let letters = product.name.split("");

    let letter1 = TypeNameDetail.find(detail => detail.letter === letters[0]);
    let letter2 = TypeNameDetail.find(detail => detail.letter === letters[1]);
    let letter3 = TypeNameDetail.find(detail => detail.letter === letters[2]);
    let letter4 = TypeNameDetail.find(detail => detail.letter === letters[3]);

    return(
        <React.Fragment>
            <p><span className="font-weight-bold">{letter1.name}</span>: {letter1.description}</p>
            <p><span className="font-weight-bold">{letter2.name}</span>: {letter2.description}</p>
            <p><span className="font-weight-bold">{letter3.name}</span>: {letter3.description}</p>
            <p><span className="font-weight-bold">{letter4.name}</span>: {letter4.description}</p>
        </React.Fragment>
    );
}

export default SingleProduct;