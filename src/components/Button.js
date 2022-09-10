import { Link } from 'react-router-dom';

const Button = ({buttonData}) => {
    return (
        <button type='button' className={"btn btn-main " + (buttonData.btnClass ? buttonData.btnClass : '')}>
            <Link to={buttonData.link ? buttonData.link : '/'} className={(buttonData.linkClass ? buttonData.linkClass : '')}>
            <span className='text-nowrap'>{buttonData.text}</span>
            </Link>
        </button>
    );
}

export default Button;