import React from "react";
import './About.css';
import banner from './images/about.jpg';
import Footer from './Footer';


function About(){
    return(
        <div className="about">
            <div className="image-container">
                <img src={banner} alt="about" className="image" />
            </div>
            <div className="aboutus container">
                <h1>About Us</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="paragraph">
                            <p>Welcome to Rising Kids Preschool</p>
                            <p>At Rising Kids Preschool, we believe that every child is unique and deserves the best start in their educational journey. Founded with a vision to nurture young minds and foster a love for learning, our preschool provides a safe, supportive, and stimulating environment where children can explore, discover, and grow.</p>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="paragraph">
                        <p>Our Philosophy</p>
                        <p>At the heart of Rising Kids Preschool is a child-centric philosophy that focuses on holistic development. We recognize the importance of providing children with a well-rounded education that encompasses not only academic excellence but also social-emotional development, creativity, and physical well-being. Our curriculum is designed to cater to the diverse needs and interests of each child, ensuring that they reach their full potential in all areas of development.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="paragraph">
                        <p>Our Approach</p>
                        <p>At Rising Kids Preschool, we follow a play-based approach to learning, where children learn through hands-on experiences, exploration, and discovery. Our dedicated team of educators creates a nurturing and engaging learning environment where children feel valued, respected, and encouraged to express themselves freely. Through a combination of structured activities, guided play, and outdoor exploration, we inspire curiosity, creativity, and a lifelong love for learning.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="paragraph">
                        <p>Our Commitment</p>
                        <p>As educators, we are committed to providing the highest quality early childhood education and care for every child entrusted to us. We prioritize the safety, well-being, and happiness of each child, and we strive to create a supportive and inclusive community where families feel welcome and supported. Through ongoing communication, collaboration, and partnership with parents and caregivers, we work together to ensure the best possible outcomes for every child.</p>

                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="paragraph">
                        <p>Join Our Community</p>
                        <p>We invite you to join our community at Rising Kids Preschool and embark on an exciting educational journey filled with laughter, learning, and growth. Whether you're a parent looking for the perfect preschool for your child or an educator passionate about making a difference in children's lives, we welcome you with open arms. Together, let's inspire the next generation of thinkers, dreamers, and leaders!</p>
                        </div>
                    </div>
                   
                </div>
            </div>




{/*-----------------Footer---------------------*/}

<Footer />





        </div>
    )
}
export default About;
