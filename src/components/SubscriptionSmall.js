import React from 'react';
import { AiFillRightSquare } from 'react-icons/ai';

const SubscriptionLarge = () => {
    return (
        <div className="container-fluid py-5 subscription-home">
            <div className='row d-flex align-items-center'>
                <div className="col-12 col-md-6 text-center text-md-right">
                    <h4>Sign Up to Our Newsletter for Exclusive Offers!</h4>
                </div>
                <div className="col-12 col-md-6 text-left">
                        <form>
                            <div className="d-flex align-items-center justify-content-center">
                            <input type='email' placeholder="enter email" className='align-middle mr-0'></input>
                            <button type='submit' className='btn-subscription m-0 p-0'><AiFillRightSquare size='50px' margin='0' padding='0' /></button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionLarge;