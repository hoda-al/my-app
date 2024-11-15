import React from 'react';
import img from '../images/illustration.png'


export default function  About() {
  return (
  
<div className="about">


    <div className="container-fluid overflow-hidden py-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="RotateMoveLeft">
              <img src={img} className="img-fluid w-100" alt="About Us" />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-12">
                <div className="section-title center-title">
                <h2>Blog Update</h2>
                </div>
                </div>
            <h5 className="display-5 mb-4">
              Get Started Easily With a Personalized Product Tour
            </h5>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
              suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab
              aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore
              atque.
            </p>
           
          </div>
        </div>
      </div>
    </div>
    

       
      

    </div>

  );
};


