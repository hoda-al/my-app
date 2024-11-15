import React from 'react';
import Service from '../pages/service'
import PartnersOfseccusse from '../pages/partnersOfsuccess'
import img from '../images/blog-3.jpg'
import Header from '../content/header';
import About from '../pages/about';
import StatsSection from '../pages/StatsSection';



export default function Home() {
    return (
        <>
        <Header/>
      <div>
      <section id="hero" className="hero section dark-background">
      <img src={img} alt="" data-aos="fade-in" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
            <p data-aos="fade-up" data-aos-delay="200">We are a team of talented designers making websites with Bootstrap</p>
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="300">
            <form action="#" method="post" className="php-email-form">
              <div className="sign-up-form">
                <input type="email" name="email" placeholder="Enter your email" />
                <input type="submit" value="Subscribe" />
              </div>
            
            </form>
          </div>
        </div>
      </div>
    </section>

 <div>
    <About/>
 </div>
 
<div>
    <StatsSection/>
</div>

 <div>
            <Service/>
        </div>
    
    <div>
      <PartnersOfseccusse/>
      
    </div>

      </div>
      </>
    );
  }