
import React, { Component }  from 'react';
// import {  Jumbotron } from 'reactstrap';


const Button = ({buttonData}) => {
    return (
        <>
        <button className="btn btn-main">{buttonData.text}</button>
        </>
    );
}

export default Button;