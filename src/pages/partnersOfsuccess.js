import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Logocompany from '../content/logocompany';




const LogoCarousel = () => {
    const logos = [
        { img: require('../images/logo/logo-1.png'), alt: "Logo 1" },
        { img: require('../images/logo/logo-2.png'), alt: "Logo 2" },
        { img: require('../images/logo/dell.png'), alt: "Logo 3" },
        { img: require('../images/logo/hp.png'), alt: "Logo 4" },
        { img: require('../images/logo/huawei.png'), alt: "Logo 5" },
        { img: require('../images/logo/R.png'), alt: "Logo 6" },
    ];
    const datashow = logos.map((el, index) => (
        <Logocompany key={index} img={el.img}  />

    ));
    useEffect(() => {
        window.$('.logo__carousel').owlCarousel({
            items: 5, // عرض 5 عناصر
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                406: {
                    items: 2 // عنصر واحد على الشاشات الصغيرة
                },
                760: {
                    items: 3 // عنصرين على الشاشات المتوسطة
                },
                1200: {
                    items: 5 // خمسة عناصر على الشاشات الكبيرة
                }
            }
        });
    }, []);

    return (
        <div className="logo spad">
            <div className="container">
            <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title center-title">
                            <h2>شركاء النجاح</h2>
                        </div>
                    </div>
                </div>

                <div className="logo__carousel owl-carousel">
            {datashow}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
