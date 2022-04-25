import React, { useEffect, useState} from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { formatPrice } from '../utils/FormatPrice';
// import { Loading, Error } from '../components';
import { IndividualProductData } from '../pages/products/ProductsData';

const SingleProduct = () => {
    const { productId } = useParams();
    console.log(typeof(productId));
    // const history = useHistory();

    const product = IndividualProductData.find((product) => product.id === parseInt(productId));
    console.log(product);
    // useEffect(() => {
    // fetchSingleProduct(`${url}${id}`)
    // }, [id])


    // useEffect(() => {
    //     if (error) {
    //         setTimeout(() => {
    //             history.push('/')
    //         }, 3000)
    //         }
    // }, [error])

    // if (Loading) {
    //     return <Loading />
    // }

    // if (error) {
    //     return <Error />
    // }

    return (
        <div className='container-fluid pt-5 mt-4'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                    <button class="btn btn-main outline-btn">
                        <Link to='/products/' className='outline-link'>
                        Back to Products
                        </Link>
                    </button>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-6'>
                    <ProductImgGrid images={product.img} />
                </div>
                <div className='col-6'>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Availability:</strong> {product.stock} in stock</p>
                    <p><strong>Price:</strong> {formatPrice(product.price)}</p>
                </div>
            </div>
        </div>
    );
}

const ProductImgGrid = ({ images }) => {
    const [main, setMain] = useState(images[0]);
    
    return (
        <React.Fragment>
            <img src={main.img} alt='main' className='main' />
            {
                images.map(image => {
                return (
                    <img src={image.img} alt={image.alt} key={image.id} onClick={() => setMain(images[image.id])} className='img-fluid'/>
                )})
            }
        </React.Fragment>
    );

}

// const MiniImg = ({image }) => {
//     return(
//         <img src={image.img} alt={image.alt} key={image.id} onClick={() => setMain(images[image.id])} className='img-fluid'/>
//     )
// }

export default SingleProduct;