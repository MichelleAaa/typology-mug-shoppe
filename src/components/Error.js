import React from 'react';

const Error = () => {
    return (
        <main className='container-fluid pt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-9 d-flex justify-content-center align-items-center error'>
                    <h1 className='py-5 error-text'>Unfortunately, there was an error. Please try again later. If the problem persists, please contact us at <a role="button" className="" href="mailto:admin@tmugs.com">admin@tmugs.com</a>.</h1>
                </div>
            </div>
        </main>
    );
}

export default Error;
