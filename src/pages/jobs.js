import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <section
                className="section-hero overlay inner-page bg-image"
                style={{ backgroundImage: "url('../images/hero_1.jpg')" }}
                id="home-section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="text-white font-weight-bold">Sign Up/Login</h1>
                            <div className="custom-breadcrumbs">
                                <Link to="/">Home</Link>
                                <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>Log In</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="job_listing_area plus_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="recent_joblist_wrap">
                                <div className="recent_joblist white-bg">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4>Job Listing</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="job_lists m-0">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="single_jobs white-bg d-flex justify-content-between">
                                            <div className="jobs_left d-flex align-items-center">
                                                <div className="jobs_content">
                                                <Link to="/jobs/jobDetail" >
    <h3>Software Engineer</h3>
</Link>
                                                    <div className="links_locat d-flex align-items-center">
                                                        <div className="location">
                                                            <p><i class="fa-solid fa-location-dot"></i>California, USA</p>
                                                        </div>
                                                        <div className="location">
                                                            <p><i className="fa-regular fa-clock"></i> Part-time</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jobs_right">
                                                <div className="apply_now">
                                                   
                                                    <Link to="/jobs/jobDetail" className="boxed-btn3">Apply Now</Link>
                                                </div>
                                                <div className="date">
                                                    <p>Date line: 31 Jan 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
    <div className="col-lg-12">
        <div className="pagination_wrap">
            <ul>
                <li><Link to="#"><i class="fa-solid fa-arrow-left"></i></Link></li>
                <li><Link to="#"><span>01</span></Link></li>
                <li><Link to="#"><span>02</span></Link></li>
                <li><Link to="#"><i class="fa-solid fa-arrow-right"></i></Link></li>
            </ul>
        </div>
    </div>
</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
