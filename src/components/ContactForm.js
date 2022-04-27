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
        <div className="container-fluid ">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-6 text-center home-about mt-4 py-5">
                    <h2 className="beige-section-title pb-4">Send Us your Questions and Feedback</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input className="form-control"
                                type="text"
                                name="first-name"
                                id="first-name"
                                // value='name'
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input className="form-control"
                                type="text"
                                name="last-name"
                                id='last-name'
                                // value='name'
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Email</label>
                            <input className="form-control"
                                type="email"
                                name="email"
                                // value='email'
                                onChange={(e) => handleInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Comments</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="comment" onChange={(e) => handleInputChange(e)}></textarea>
                            </div>
                        <input type="submit" value="Submit" />
                        </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;