import React, { useState }  from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter, Button  } from 'reactstrap';
import { BsCheck2Circle } from 'react-icons/bs';
import { AiFillRightSquare } from 'react-icons/ai';

const SubscriptionLarge = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleEmailSubmit = () => {
        if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)){
            toggle();
        }else{
            alert('Please enter a valid email address to proceed.');
        }
    }

    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.currentTarget.value);
    };

    return (
        <section className="container-fluid py-5 subscription-home">
            <div className='row d-flex align-items-center'>
                <div className="col-12 col-md-6 text-center text-md-right">
                    <h4>Sign Up to Our Newsletter for Exclusive Offers!</h4>
                </div>
                <div className="col-12 col-md-6 text-left">
                        <form>
                            <div className="d-flex align-items-center justify-content-center">
                            <input type='email' placeholder="enter email" className='align-middle mr-0'onChange={handleInputChange}></input>
                            <button type='button' className='btn-subscription m-0 p-0' onClick={() => handleEmailSubmit()}><AiFillRightSquare size='50px' margin='0' padding='0' /></button>
                            </div>
                        </form>
                        <Modal isOpen={modal} toggle={toggle} className=''>
                            <ModalHeader toggle={toggle}> 
                            <div className='d-flex flex-row justify-content-center align-items-center'>
                                <BsCheck2Circle color='green' margin='auto' />
                                <p className='my-auto pl-1'> Subscription Confirmed</p>
                            </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className='d-flex flex-row justify-content-center align-items-center'>
                                    <p className='pl-3 product-modal-text'>You have been subscribed to our monthly newsletter.</p>
                            </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="btn btn-main outline-btn text-dark" onClick={toggle}>Continue Browsing</Button>
                            </ModalFooter>
                        </Modal>
                </div>
            </div>
        </section>
    )
}

export default SubscriptionLarge;