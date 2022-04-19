import React from 'react';

const BeigeBackgroundText = ({ textData }) => {
    return (
        <div className="container-fluid ">
            <div className="row d-flex justify-content-center">
                <div className="col-11 col-sm-9 text-center home-about mt-4 py-5 beige-background">
                    <h2 className="beige-section-title">{textData.title}</h2>
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
        <p className="beige-section-text">{paragraph}</p>
    );
}


export default BeigeBackgroundText;