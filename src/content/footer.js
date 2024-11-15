import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        // Add your subscription logic here
    };

    return (
        <footer className="footer">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div className="footer_logo">
                                    <Link to="#">
                                        <img src="img/logo.png" alt="Company Logo" />
                                    </Link>
                                </div>
                                <p>
                                    finloan@support.com <br />
                                    +10 873 672 6782 <br />
                                    600/D, Green road, NewYork
                                </p>
                                <div className="socail_links">
                                    <ul>
                                        <li>
                                            <Link to="#" aria-label="Facebook">
                                                <i className="ti-facebook"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" aria-label="Google Plus">
                                                <i className="fa fa-google-plus"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" aria-label="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" aria-label="Instagram">
                                                <i className="fa fa-instagram"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-6 col-lg-2">
                            <div className="footer_widget wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".4s">
                                <h3 className="footer_title">Company</h3>
                                <ul>
                                    <li><Link to="#">About</Link></li>
                                    <li><Link to="#">Pricing</Link></li>
                                    <li><Link to="#">Carrier Tips</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-lg-3">
                            <div className="footer_widget wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".5s">
                                <h3 className="footer_title">Category</h3>
                                <ul>
                                    <li><Link to="#">Design & Art</Link></li>
                                    <li><Link to="#">Engineering</Link></li>
                                    <li><Link to="#">Sales & Marketing</Link></li>
                                    <li><Link to="#">Finance</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6 col-lg-4">
                            <div className="footer_widget wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".6s">
                                <h3 className="footer_title">Subscribe</h3>
                                <form onSubmit={handleSubscribe} className="newsletter_form">
                                    <input type="text" placeholder="Enter your mail" aria-label="Email" required />
                                    <button type="submit">Subscribe</button>
                                </form>
                                <p className="newsletter_text">
                                    Esteem spirit temper too say adieus who direct esteem esteems luckily.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
                <div className="container">
                    <div className="footer_border"></div>
                    <div className="row">
                        <div className="col-xl-12">
                            <p className="copy_right text-center">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
