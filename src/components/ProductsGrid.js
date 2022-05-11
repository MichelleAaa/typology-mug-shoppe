import React from 'react';
import { Fade } from 'react-animation-components';
import { FormatPrice } from '../utils/FormatPrice';
import { useSelector } from 'react-redux';
import { BiSearchAlt2 } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const ProductsGrid = () => {
const productsData = useSelector(state => state.products.filteredProducts);

    return (
        <Fade in>
            <section>
                <div className='container-fluid mb-5'>
                    <div className="row d-flex justify-content-center align-items-center mx-1 mx-md-3 mx-lg-5 px-md-5">
                        { productsData.map(product =><Product key={product.id} product={product}/> ) }
                    </div>
                </div>
            </section>
        </Fade>
    );
}

const Product = ({product}) => {
    return (
        <article className='col-6 col-sm-6 col-md-4 col-xl-3 p-0 m-0'>
            <div className="d-flex flex-column justify-content-center">
                <div className='wrapper-product-img'>
                    <img src={product.img} alt={product.name} className="products-grid-img"/>
                            <h5 className="text-wrapper-2">{FormatPrice(product.price)}</h5>
                    <Link to={`/products/${product.id}`}>
                        <div className="overlay">
                            <BiSearchAlt2 size='50px' className='hidden' />
                        </div>
                    </Link>
                </div>
            </div>
        </article>
    );
}


export default ProductsGrid;