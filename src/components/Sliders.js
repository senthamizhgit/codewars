import React from 'react';

export default class Sliders extends React.Component {
    render() {
        return (
            <div className='slider-header no-padding content-block w3eden'>
                    <div className='inner-content'>
                        {/* <div className="w3-content w3-section">
                            <img className='hs-cta-img mySlides' height='329' width='100%' src={require('../styles/assets/Code.jpg')} />
                            <img className='hs-cta-img mySlides' height='329' width='100%' src={require('../styles/assets/Compete.jpg')} />
                            <img className='hs-cta-img mySlides' height='329' width='100%' src={require('../styles/assets/Celebrate.jpg')} />
                        </div> */}
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src='/assets/Code.jpg' alt="First slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src='/assets/Compete.jpg' alt="Second slide" />
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src='/assets/Celebrate.jpg' alt="Third slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
        )
    }
}