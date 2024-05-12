
import React, { useEffect, useState } from 'react';
import './Timeline.css';
import kids1 from './images/kids1.jpg';
import kids2 from './images/kids2.jpg';
import kids3 from './images/kids3.jpg';

const TimelineComponent = () => {
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [full, setFull] = useState(false);
  const [setHeight] = useState(0);
  const targetY = window.innerHeight * 0.8;

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      setUp(scrollY < prevScrollY);
      setDown(!up);

      const timelineRect = document.querySelector('.timelines').getBoundingClientRect();
      const dist = targetY - timelineRect.top;

      if (down && !full) {
        document.querySelector('.lines').style.bottom = `calc(100% - ${Math.min(dist, scrollY)}px)`;
      } else if (!full) {
        const linePosition = Math.max(dist - scrollY, 0);
        document.querySelector('.lines').style.bottom = `${linePosition}px`;
  
        if (linePosition === 0) {
          setFull(false); 
        }
      }

      if (dist > document.querySelector('.timelines').offsetHeight + 50 && !full) {
        setFull(true);
        document.querySelector('.lines').style.bottom = '-50px';
      } 

      
      document.querySelectorAll('.sections').forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
          item.classList.add('show-me');
        } else {
          item.classList.remove('show-me');
        }
      });

      setPrevScrollY(window.scrollY);
    };

    scrollHandler();
    document.querySelector('.lines').style.display = 'block';
    window.addEventListener('scroll', scrollHandler);
    

    return () => {      
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [down, full, prevScrollY, setHeight, targetY, up]);

  return (
    <section id="time-line">
      <div className="bodys">
        <div className="continers">
        <div className="top-section">
          <h1  style={{color: '#fff'}}>Why Rising Kids<i className="fa fa-2x fa-question" style={{color: '#fff'}}></i></h1>
       <p>"Discover the Extraordinary: Why Rising Kids Stands Apart"</p>
       <p>At Rising Kids, we don't just educate; we inspire. We believe in nurturing not only academic excellence but also fostering a holistic development journey for every child. Here, learning transcends the confines of traditional classrooms, embracing innovation, creativity, and experiential exploration.</p>
        </div>
    
      <div className="timelines">
        <div className="lines"></div>
        <div className='beds'></div>
        <div className="sections"> 
               <img src={kids1} alt='img' className="img-fluid rounded" style={{ width: '100px' }} />
                <div className="content"> <div className='  '>
            <p className='buttons' style={{color: '#fff'}}>Do you know?</p>
            </div>
              <h2>Innovative Curriculum</h2>
<p>Our curriculum is a blend of academic rigor and hands-on learning experiences, designed to ignite curiosity and unleash the potential of every student.</p>
        </div>
        </div>



<div className='divine'>
<h3 style={{color: 'green'}}>Extracurricular Excellence:</h3>
<p>Beyond textbooks, our students thrive in a diverse range of extracurricular activities, from arts and sports to community service projects, encouraging them to discover their passions and talents.</p>
</div>


      
        <div className="sections">
          <img src={kids2} alt='Laptop' className="img-fluid rounded" style={{ width: '100px' }} />
          <div className="contents">
            <h6 style={{color: 'pink'}}>Holistic Growth: <i className="fa fa-2x fa-question"></i></h6>
                   <p>We prioritize the holistic development of our students, emphasizing not just academic achievements but also social-emotional skills, character development, and leadership qualities.</p>              
          </div>
        </div>
    
    
        
        <div className="sections"> 
        <img src={kids3} alt='laptop' className="img-fluid rounded" style={{ width: '100px' }}  />
          <div className="contents">
            <div className="box-size">
              <p style={{color: 'rgb(255, 69, 193)'}}>Dedicated Educators</p>
              <p>Our team of passionate educators goes above and beyond to create a nurturing and supportive environment where every child feels valued, challenged, and inspired to excel.</p>
            </div>              
          </div>
        </div>

<div className='sections'>
  <div className='contents'>
    <p style={{color: 'pink'}}>State-of-the-Art Facilities: </p>
    <p>From well-equipped classrooms to cutting-edge technology labs and sprawling outdoor spaces, our campus provides the ideal setting for exploration, discovery, and growth.</p>
  </div>


</div>


<div className='section'> 
<div className='contents'>
<p style={{color: '#9bf5ffca'}}>Parent Partnership: </p>
<p>We believe in the power of collaboration between home and school. Our open communication channels and collaborative initiatives ensure that parents are integral partners in their child's educational journey.</p>
</div>
</div>

<div className='sections'>
  <div className='contents'>
<p style={{color: '#00fffb'}}>Commitment to Excellence:</p>
<p>
At Rising Kids, excellence is not just a goal; it's a way of life. We are committed to continuous improvement, innovation, and staying abreast of the latest trends and best practices in education.
</p>
  </div>

</div>

    
      </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
    