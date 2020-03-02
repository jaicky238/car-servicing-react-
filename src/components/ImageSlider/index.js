import React from 'react'
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider() {
    return (
        <Carousel  infiniteLoop autoPlay swipeable emulateTouch showThumbs={false}>
            <div>
                <img src={require('../../Assets/crousal/img1.jpg')} alt="img1" className="carouselImages"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
            <img src={require('../../Assets/crousal/img2.jpg')} alt="img1" className="carouselImages" />                
                <p className="legend">Legend 2</p>
            </div>
            <div>
            <img src={require('../../Assets/crousal/img3.jpg')} alt="img1" className="carouselImages" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    )
}

export default ImageSlider
