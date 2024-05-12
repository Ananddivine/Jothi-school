import React from "react";
import './activities.css';
import TimelineComponent from "./TimelineComponent";
import Footer from './Footer';


function Activities(){
    return(
      <div className="activites">
            <h1 className="activ">Activities</h1>

            <TimelineComponent />

            <p className="activity">Choose Rising Kids for an educational experience that goes beyond the ordinary, where every child is empowered to soar to new heights and become the best version of themselves."</p>
     

     <Footer />
      </div>

    )
};

export default Activities;