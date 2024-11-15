import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import ServiceContent from '../content/serviceContent';
import { Data } from '../test/data';

const Service = () => {
    const options = {
        items: 3,
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        responsive: {
            470: { items: 1 },
            760: { items: 2 },
            1200: { items: 3 },
        },

    };

    const datashow = Data.map((el, index) => (
        <ServiceContent key={index} img={el.img} title={el.title} />
    ));

    return (
        <div className="container-xxl py-5">
            <div className="container">
            <div className="col-lg-12">
                <div className="section-title center-title">
                <h2>Blog Update</h2>
                </div>
                </div>
                <OwlCarousel className="latest__slider" {...options}>
                    {datashow}
                </OwlCarousel>
            </div>
        
        </div>
    );
};

export default Service;
