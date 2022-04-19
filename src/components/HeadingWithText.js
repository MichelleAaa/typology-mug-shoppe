import React from 'react';

const HeadingWithText = ({ textData }) => {
    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-9 text-center home-about mt-2 pt-2 mb-0 pb-0">
                    <h1 className="display-4">{textData.title}</h1>
                    {
                        textData.text.map(text => <Para key={text.id} paragraph={text.text}/>)
                    }
                </div>
            </div>
        </div>
    );
}

const Para = ({paragraph}) => {
    return (
        <p>{paragraph}</p>
    );
}


export default HeadingWithText;