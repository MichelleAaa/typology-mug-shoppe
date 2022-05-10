import React, { useState } from 'react';

const ContactForm = () => {
    const [input, setInput] = useState({});

    const handleInputChange = (e) => {
        setInput({
        ...input, [e.currentTarget.name]: e.currentTarget.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Current state is: ' + JSON.stringify(input));
        alert('You entered: ' + JSON.stringify(input));
    };

    return (
        <section className="container-fluid ">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-lg-6 text-center home-about mt-4 py-5">
                    <h2 className="contact-title pb-5">Send Us Your Questions and Feedback</h2>
                    <form onSubmit={(e) => handleSubmit(e)} className='contactus-form text-left'>
                        <div className="row form-group">
                            <div className="col">
                            <label htmlFor="first-name">First Name</label>
                            <input className="form-control"
                                type="text"
                                name="first-name"
                                id="first-name"
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                            </div>
                            <div className="col">
                            <label htmlFor="last-name">Last Name</label>
                            <input className="form-control"
                                type="text"
                                name="last-name"
                                id='last-name'
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                            </div>
                        </div>
                        <div className="form-group">
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input className="form-control"
                                type="email"
                                name="email"
                                id='email'
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone (Optional)</label>
                            <input className="form-control"
                                type="tel"
                                name="phone"
                                id='phone'
                                onChange={(e) => handleInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comments</label>
                            <textarea className="form-control" id="comment" rows="5" name="comment" onChange={(e) => handleInputChange(e)}></textarea>
                        </div>
                        <div className="form-group text-center pt-3">
                            <input type="submit" value="Submit" className='contact-btn' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;