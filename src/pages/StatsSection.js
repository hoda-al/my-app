import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFolder, faClock, faUsersCog } from '@fortawesome/free-solid-svg-icons';
const PureCounter = require('@srexi/purecounterjs');

const StatsSection = () => {
  useEffect(() => {
    // Initialize PureCounter after component mounts
    new PureCounter();
  }, []);

  return (
    <section id="stats" className="stats section dark-background">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <FontAwesomeIcon icon={faUsers} size="2x" /> {/* أيقونة العملاء */}
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"> </span>
              <p>Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <FontAwesomeIcon icon={faFolder} size="2x" /> {/* أيقونة المشاريع */}
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <FontAwesomeIcon icon={faClock} size="2x" /> {/* أيقونة ساعات الدعم */}
              <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <FontAwesomeIcon icon={faUsersCog} size="2x" /> {/* أيقونة العمال */}
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" className="purecounter"></span>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
