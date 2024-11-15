import React from 'react';

const Contact = () => {
  return (
    <>
      {/* HOME */}
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: "url('images/hero_1.jpg')" }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">Contact Us</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white"><strong>Contact Us</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section" id="next-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <form action="#" className="">
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">First Name</label>
                    <input type="text" id="fname" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-black" htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="subject">Subject</label>
                    <input type="text" id="subject" className="form-control" />
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <label className="text-black" htmlFor="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      className="form-control"
                      placeholder="Write your notes or questions here..."
                    ></textarea>
                  </div>
                </div>

                <div className="row form-group">
                  <div className="col-md-12">
                    <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white" />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-5 ml-auto">
              <div className="p-4 mb-3 bg-white">

                <div className="contact-info">
                  <div>
                    <p className="mb-0 font-weight-bold">Address</p>
                    <p className="mb-4">203 Fake St. Mountain View, </p>
                  </div>
                  <i className="fa fa-map-marker"></i>
                </div>

                <div className="contact-info">
                  <div>
                    <p className="mb-0 font-weight-bold">Phone</p>
                    <p className="mb-4"><a href="#">+1 232 3235 324</a></p>
                  </div>
                  <i className="fa fa-phone"></i>
                </div>
            <div></div>

                <div className="contact-info">
                  <div>
                    <p className="mb-0 font-weight-bold">Email Address</p>
                    <p className="mb-0"><a href="#">youremail@domain.com</a></p>
                  </div>
                  <i className="fa fa-envelope"></i>
                </div>

              </div>
            </div>

            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: "100px" }}>
              <div className="rounded h-100">
                <iframe className="rounded w-100" style={{ height: '500px' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
