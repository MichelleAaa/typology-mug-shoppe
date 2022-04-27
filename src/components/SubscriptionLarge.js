import React from 'react';
import { AiFillRightSquare } from 'react-icons/ai';

const SubscriptionLarge = () => {
    return (
        <div className="container-fluid mt-4 py-5 subscription-home">
            <div className='row'>
                <div className="col-12 text-center">
                    <h4>Sign up to receive our newsletter for exclusive offers</h4>
                    <p>Never miss a sale, sign up today!</p>
                        <form>
                            <div className='d-flex align-items-center justify-content-center'>
                            <input type='email' placeholder="enter email" className='mr-0'></input>
                            <button type='submit' className='btn-subscription m-0 p-0'><AiFillRightSquare size='50px' margin='0' padding='0' /></button>
                            </div>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionLarge;