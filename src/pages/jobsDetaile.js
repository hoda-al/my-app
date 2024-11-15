import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application submitted!');
    };

    const handleFileChange = (e) => {
        const fileName = e.target.files[0] ? e.target.files[0].name : 'Upload CV';
        const label = document.querySelector('label[for="inputGroupFile03"]');
        label.textContent = fileName;
    };

    useEffect(() => {
        const loadMap = () => {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.body.appendChild(script);
        };

        loadMap();

        window.initMap = () => {
            const grayStyles = [
                {
                    featureType: "all",
                    stylers: [
                        { saturation: -90 },
                        { lightness: 50 }
                    ]
                },
                { elementType: 'labels.text.fill', stylers: [{ color: '#ccdee9' }] }
            ];
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: -31.197, lng: 150.744 },
                zoom: 9,
                styles: grayStyles,
                scrollwheel: false
            });
        };
    }, []);

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

            <div className="job_details_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="job_details_header">
                                <div className="single_jobs white-bg d-flex justify-content-between" style={{ background: "#ffffff" }}>
                                    <div className="jobs_left d-flex align-items-center">
                                        <div className="jobs_content">
                                            <h4>Software Engineer</h4>
                                            <div className="links_locat d-flex align-items-center">
                                                <div className="location">
                                                    <p><i class="fa-solid fa-location-dot"></i> California, USA</p>
                                                </div>
                                                <div className="location">
                                                    <p><i className="fa-regular fa-clock"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="descript_wrap white-bg" style={{ background: "#ffffff" }}>
                                <div className="single_wrap">
                                    <h4>Job Description</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available...</p>
                                    <p>Variations of passages of Lorem Ipsum available...</p>
                                </div>
                                <div className="single_wrap">
                                    <h4>Responsibility</h4>
                                    <ul>
                                        <li>The applicants should have experience in the following areas.</li>
                                        <li>Have sound knowledge of commercial activities.</li>
                                        <li>Leadership, analytical, and problem-solving abilities.</li>
                                        <li>Should have vast knowledge in IAS/IFRS, Company Act, Income Tax, VAT.</li>
                                    </ul>
                                </div>
                                <div className="single_wrap">
                                    <h4>Qualifications</h4>
                                    <ul>
                                        <li>The applicants should have experience in the following areas.</li>
                                        <li>Have sound knowledge of commercial activities.</li>
                                        <li>Leadership, analytical, and problem-solving abilities.</li>
                                        <li>Should have vast knowledge in IAS/IFRS, Company Act, Income Tax, VAT.</li>
                                    </ul>
                                </div>
                                <div className="single_wrap">
                                    <h4>Benefits</h4>
                                    <p>There are many variations of passages of Lorem Ipsum available...</p>
                                </div>
                            </div>
                            <div className="apply_job_form white-bg" style={{ background: "#ffffff" }}>
                                <h4>Apply for the job</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input_field">
                                                <input type="text" placeholder="Your name" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input_field">
                                                <input type="email" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input_field">
                                                <input type="text" placeholder="Website/Portfolio link" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupFileAddon03">
                                                        <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                        type="file" 
                                                        className="custom-file-input" 
                                                        id="inputGroupFile03" 
                                                        aria-describedby="inputGroupFileAddon03" 
                                                        onChange={handleFileChange} 
                                                    />
                                                    <label className="custom-file-label" htmlFor="inputGroupFile03">Upload CV</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="input_field">
                                                <textarea name="coverLetter" cols="30" rows="10" placeholder="Cover letter" required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
    <div class="submit_btn">
        <button class="btn submit-button " style={{color:"#ffffff"}} type="submit">Apply Now</button>
    </div>
</div>

                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="job_summary" style={{ background: "#ffffff" }}>
                                <div className="summary_header">
                                    <h3>Job Summary</h3>
                                </div>
                                <div className="job_content">
                                    <ul>
                                        <li>Published on: <span>12 Nov, 2019</span></li>
                                        <li>Vacancy: <span>2 Positions</span></li>
                                        <li>Salary: <span>50k - 120k/y</span></li>
                                        <li>Location: <span>California, USA</span></li>
                                        <li>Job Nature: <span>Full-time</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="share_wrap d-flex">
                                <span style={{ fontSize: '16px', fontWeight: 500, color: '#001D38', marginRight: '20px' }}>Share at:</span>
                                <ul>
                                    <li><Link to="#"><i class="fa-brands fa-facebook"></i></Link></li>
                                    <li><Link to="#"><i class="fa-solid fa-envelope"></i></Link></li>
                                    <li><Link to="#"><i class="fa-brands fa-linkedin"></i></Link></li>
                                    <li><Link to="#"><i class="fa-brands fa-twitter"></i></Link></li>
                                </ul>
                            </div>
                            <div className="job_location_wrap">
                                <div className="job_lok_inner">
                                    <div id="map" style={{ height: '200px' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
