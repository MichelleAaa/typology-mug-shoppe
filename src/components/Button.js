
import React, { Component }  from 'react';

const Button = ({buttonData}) => {
    return (
        <>
        <button className="btn btn-main">{buttonData.text}</button>
        </>
    );
}

export default Button;