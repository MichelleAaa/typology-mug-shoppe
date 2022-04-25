
import React  from 'react';
import { Link } from 'react-router-dom';

const Button = ({buttonData}) => {
    return (
        <>
        <button className={"btn btn-main " + (buttonData.btnClass ? buttonData.btnClass : '')}>
            <Link to={buttonData.link ? buttonData.link : '/'} className={(buttonData.linkClass ? buttonData.linkClass : '')}>
            {buttonData.text}
            </Link>
        </button>
        </>
    );
}

export default Button;