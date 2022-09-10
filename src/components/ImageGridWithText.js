
const ImgGridWithText = ({ textData }) => {
    return (
        <section className="container-fluid my-5">
            <div className="row pt-1 pt-md-5 d-flex justify-content-center align-items-center">
                <article className="col-11 col-xl-6 text-center">
                    <h2 className="img-grid-text-header py-2">{textData.title}</h2>
                    <h3 className="px-lg-3 mb-3 img-grid-text-subheader">{textData.subtitle}</h3>
                    <p className="mx-lg-5 mt-2 ">{textData.text1}</p>
                    <p className="mx-lg-5 mt-2 ">{textData.text2}</p>
                </article>
                <div className="col-11 col-xl-6">
                    <div className="row">
                        <div className="col-6">
                            <img src={textData.img1} className='img-grid-1' alt='cup'></img>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className='col-12'>
                                    <img src={textData.img2} className='img-grid-2 img-fluid' alt='cup'></img>
                                    <img src={textData.img3} className='img-grid-3 img-fluid' alt='cup'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ImgGridWithText;