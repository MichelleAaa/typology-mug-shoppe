import { MdErrorOutline } from 'react-icons/md';

const CartError = () => {
    return (
        <div className='container-fluid pt-5'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center cart-error'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                    <MdErrorOutline size='50px' color='gray' />
                    <h2 className='mt-5'> Apologies, but we are unable to accept orders at this time.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartError;
