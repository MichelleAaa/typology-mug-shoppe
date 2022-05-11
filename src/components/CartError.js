import { MdErrorOutline } from 'react-icons/md';

const CartError = () => {
    return (
        <main className='container-fluid pt-5'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center error'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                    <MdErrorOutline size='50px' color='gray' />
                    <h1 className='mt-5 error-text'> Apologies, but we are unable to accept orders at this time.</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CartError;
