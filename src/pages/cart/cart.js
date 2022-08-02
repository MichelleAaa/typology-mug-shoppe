import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FormatPrice } from '../../utils/FormatPrice';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease, calculateTotals, removeItem } from '../../redux/cartSlice';
import Button from '../../components/Button';
import { Tooltip } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const CartPage = () => {
    let dispatch = useDispatch();
    const cartData = useSelector(state => state.cart.cartItems);

    useEffect(() => {
    dispatch(calculateTotals());
    }, [cartData, dispatch]);

    const subTotal = useSelector (state => state.cart.total_price);

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    if (cartData.length < 1) {
        return (
            <main className='container-fluid mt-5 pt-5 cart-wrapper'>
                <div className="row pt-5">
                    <div className="col-12 text-center">
                        <h1 className='pb-4 para-heading'>Your cart is empty</h1>
                        <Link to='/products' className='btn btn-main outline-btn outline-link'>
                            View Products
                        </Link>
                </div>
            </div>
        </main>
        );
    }
    return (
        <main className='cart-wrapper'>
            <div className='container mt-5 pt-5'>
                <div className='row py-4 d-flex justify-content-center'>
                    <div className='col-lg-10 '>
                        <h4>Your Items</h4>
                    </div>
                    <div className='col-lg-10 '>
                        <hr/>
                    </div>
                </div>
                {cartData.map(item => <CartItem key={item.id} itemData={item}/>)}
            </div>
            <div className='row d-flex justify-content-center py-5'>
                <div className='col-7 col-xl-6 text-right'>
                    <div className='row d-flex justify-content-end pb-5'>
                        <div className='col-md-8 col-xl-5'>
                            <p className='text-left cart-total mb-0'>SUMMARY</p>
                            <hr/>
                            <p>Subtotal: <span>{FormatPrice(subTotal)}</span></p>
                            <p>Shipping: <span>$5.98</span></p>
                            <p className='text-left text-nowrap cart-total mb-0'>ORDER TOTAL</p>
                            <hr/>
                            <span>{FormatPrice(subTotal + 598)}</span>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-end pb-5'>
                        <div className='col-md-8 col-xl-5'>
                            <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">
                                <Button buttonData={{id: 0, text: 'Proceed to Checkout', btnClass: 'outline-btn text-nowrap', linkClass: 'outline-link', link: '/carterror'}}/>
                            </span>
                            <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>Apologies, but we are unable to accept orders at this time.
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

const CartItem = ({ itemData }) => {
    const dispatch = useDispatch();
    
    const HandleIncreaseItem = (product) => {
        dispatch(increase(product));
    }

    const HandleDecreaseItem = (product) => {
        dispatch(decrease(product));
    }

    const HandleDeleteItem = (product) => {
        dispatch(removeItem(product));
    }

    return (
        <React.Fragment>
            <div className='row d-flex justify-content-center align-items-center'>
                <div className="col-4 col-md-3 col-lg-2">
                    <img className="img-fluid cart-img" src={itemData.img[0].img} alt={itemData.name} />
                </div>
                <div className="col-8 col-lg-6">
                    <div className='row'>
                        <div className='col-6'>
                            <h5 className='text-nowrap'>{itemData.name}</h5>
                            <p className='cart-amount'>{FormatPrice(itemData.price)}</p>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <p className=''>{FormatPrice(itemData.price * itemData.quantity)}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='d-flex flex-row justify-content-start'>
                                    <p className='cart-amount my-auto pr-1'>Quantity: {itemData.quantity}</p>
                                
                                <div className='d-flex flex-column justify-content-center'>
                                <button type='button' className='amount-btn' 
                                onClick={() => HandleIncreaseItem(itemData)}
                                >
                                    <IoIosArrowUp size='25px' />
                                </button>
                                <button type='button' className='amount-btn' 
                                onClick={() => HandleDecreaseItem(itemData)}
                                >
                                    <IoIosArrowDown size='25px' />
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-flex justify-content-end align-items-center'>
                                <button type='button' className='amount-btn' 
                                onClick={() => HandleDeleteItem(itemData)}
                                >
                                    <FaTrash />
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row py-4 d-flex justify-content-center'>
                <div className='col-lg-10 '>
                    <hr/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartPage;
