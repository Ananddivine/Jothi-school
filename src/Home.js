import React, { useRef, useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ControlledCarousel';
import ControlledCarousel from './ControlledCarousel';
import imagefor from './images/imagefor.jpg';
import kids1 from './images/kids1.jpg';
import kids2 from './images/kids2.jpg';
import kids3 from './images/kids3.jpg';
import jothi from './images/jothi.jpg';
import SHREWD from './images/SHREWD.png';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faHandsHoldingChild } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
      

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);
  const [lastScrollTop] = useState(0);

  useEffect(() => {

    const scrollHandler = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {

        setIsVisible(true);
      } else {

        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [lastScrollTop]);

  return (
    <div className='home'>
      <ControlledCarousel />

      <div className='Divine'>
        <h1>Welcome To Rising Kids</h1> {isVisible && (
          <p className='slide-out'>Best School In , Bangalore Rising Kids is fulfilling dreams for thousands of individuals<br />
            in the heart of India's dream city, Bangalore, with over 15 schools scattered throughout the city. Across India,  <br />
            our 90+ schools have gained the trust of over 75k+ parents.Our schools in Bangalore promote the overall growth of <br />
            your child.Our curriculum concentrates on shaping responsible global citizens and critical thinkers, combining <br />
            theoretical and practical knowledge for students to learn faster and become sharper. We understand that students<br />
            must become their best selves in all fields, which is why we developed the SHARPER philosophy five core foundations<br />
            that create a secure environment for our students to bloom with confidence. Rising Kids is the finest school in Bangalore,<br />
            thanks to our exclusive teaching method guided by our SHARPER philosophy.we strive to prepare our students for the future by<br />
            offering world-class facilities and personalized attention.
          </p>)}
      </div>

      <div className='anand' ref={imageRef}>
        {isVisible && (
          <img
            src={imagefor}
            alt='image1'
            className='slide-in-animation'
          />
        )}
      </div>



      {/*--------------------------------------------*/}


      <div className='jothi'>

        <h2>Infrastructure</h2>
        <p>Rising Kids School is at the top of the pedestal,<br />
          with two decades of academic rigor,sports excellence,<br />
          and world-class facilities.With 90+ schools across 25+ cities<br />
          in India we are touching 75k+ lives and shaping their minds. Rising Kids School<br />
          turns learning into a joyful experience with the SHARPER philosophy and a hands-on learning approach.<br />
          SHARPER is our guiding light: self-discipline hard work, applied science, research, physical fitness, exposure, and reflective thinking</p>


        <div className='col-md-3'>

          <img
            src={kids1}
            alt='imge'
          />

        </div>


        <div className='col-md-3'>

          <img
            src={kids2}
            alt='pi'
          />

        </div>


        <div className='col-md-3'>

          <img
            src={kids3}
            alt='im'
          />

        </div>
      </div>
      <div className='second'>
        <h3>Cultivating a Strong Base</h3>
        <div className='flex-container'>
          <div className='col-md-4'>
            <h4>EYP Curriculum</h4>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Innovative Learning Approaches</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Dynamic Exploration</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Literacy and Numeracy Enrichment</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Active Engagement and Physical Development</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Immersive Learning Experiences</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Ecological Consciousness</p>
          </div>
          <div className='col-md-4'>
            <h4>Primary Curriculum</h4>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Language Mastery & Communication Proficiency</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Mathematical Fluency</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Regional Linguistic Proficiency</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Exploration of Environmental Sciences</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Technology Integration and Digital Literacy</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Physical Fitness and Well-being</p>
          </div>
          <div className='col-md-4'>
            <h4>Secondary Curriculum</h4>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Exciting Expeditions</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Exploration in Robotics</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> holistic skill development</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Cutting-edge Innovation Concepts</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Preparation for Grade X Milestone Achievement</p>
            <p><FontAwesomeIcon icon={faSquareCheck} className='icon' /> Strategically Designed Lessons, Assessment & Incentive System</p>

          </div>
        </div>
      </div>

      <div className="px-2">

        <div className="my-5 d-flex ">
          <div className="city_th-banner-bg__9uQ_5 th-br-24 p-5 d-flex justify-content-between flex-wrap" style={{ maxWidth: '1200px' }}>
            <div className="city_th-banner-blur-eff__edpHQ"></div>
            <div className="col-md-6 col-12 pb-3 pb-md-0">
              <div className="d-flex flex-column jutsify-content-between h-100 pe-4">
                <h2 className="city_th-banner-heading__iq0Tr m-0 pb-4 th-fw-600">Trusted by Parents Nationwide</h2>
                <p className="city_th-banner-para__mOXUB m-0 pb-4">Rising Kids School Gives The Excellence Education.  Together, may we give our children the roots to grow and the wings to fly.</p>
                <div className="d-flex">
                  <div className="d-flex align-items-center pe-2">
                    <p className="city_th-banner-btnY__0P7xr mb-0 text-nowrap position-relative">
                      <a className="text-white" href="/admission">Explore Now</a>
                      <span className="arrow"></span>
                    </p>
                  </div>


                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 h-100">
              <div className="row">
                {/* Add your small boxes here */}
                {/* Example box */}
                <div className="col-sm-6 col-12 p-2">
                  <div className="city_th-bannerCard-bg__1p_ik th-br-16 p-2">
                    <div className="d-flex p-2 justify-content-between align-items-center">
                      <div>
                        <div>
                          <h3 className="city_th-bannerCard-num__OusnX m-0 th-20 th-fw-600">100%</h3>
                        </div>
                        <div>
                          <p className="city_th-bannerCard-name__xGpxO m-0 th-16 th-fw-400">Nurturing a Solid Foundation</p>
                        </div>
                      </div>
                      <div>
                        <div className='icon'><FontAwesomeIcon icon={faBuildingColumns} />  </div>
                      </div>


                    </div>

                  </div>
                </div>

                <div className="col-sm-6 col-12 p-2">
                  <div className="city_th-bannerCard-bg__1p_ik th-br-16 p-2">
                    <div className="d-flex p-2 justify-content-between align-items-center">
                      <div>
                        <div>
                          <h3 className="city_th-bannerCard-num__OusnX m-0 th-20 th-fw-600">100%</h3>
                        </div>
                        <div>
                          <p className="city_th-bannerCard-name__xGpxO m-0 th-16 th-fw-400">Trusted By Parents</p>
                        </div>
                      </div>
                      <div>
                        <div className='icon'><FontAwesomeIcon icon={faHandsHoldingChild} />  </div>
                      </div>


                    </div>

                  </div>
                </div>

                {/* End of example box */}
              </div>
            </div>
          </div>
        </div>
      </div>



      {/*Jothi akka content*/}

      <div className='Jothiakka'>

        <div className='left-side'>
          <img
            src={jothi}
            alt='text'
          />
        </div>
        <div className='right-side'>
          <h1>" Be like a diamond - rare and precious 💎"</h1>
          <p>
Jyothi brings a tapestry of experiences, each thread woven meticulously into her professional journey. She embodies a spirit of dedication and innovation, drawing from her diverse roles to nurture a culture of excellence. Her tenure as a steward of knowledge at Spoorthi Sagarika Public School from June 2019 to March 2020 reflected her unwavering commitment to shaping young minds. Prior to that, her time as a Spoken English Teacher at Sri Krishnappa Ji Seva Trust in Horamavu, Bangalore, from August 2017 to May 2018, showcased her passion for language and communication. Delving deeper into her repertoire, her role as a Sr. Transaction Processing Officer at Mphasis, an HP Company in Bangalore from February 2012 to August 2013, unveiled her prowess in organizational dynamics. With each experience, she adds layers of wisdom and insight, embodying the ethos of growth and empowerment. As she takes the helm at Rising Kids School, her journey of impact and inspiration continues, charting new horizons for educational excellence.</p>
        </div>

      </div>


{/*-------------------exposure---------------------------------------*/}



<div className='exposure'>
<h5>The Pathway to Achievement: Our Approach for Remarkable Development</h5>
<img src={SHREWD} alt='sharp' style={{width: '50%'}}/>
</div>











      {/*---------------FOOTER----------------------------*/}

     

 <Footer />

    </div>
  );
}

export default Home;
