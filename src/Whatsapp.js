import React from 'react';
import './Footer.css';

function Whatsapp() {
    return (
        <div>
           
            <a href="https://api.whatsapp.com/send?phone=8951671986" className="whatsapp-float btn btn-success" >
                <i className="fa fa-whatsapp"></i>
            </a>
        </div>
    );
}

export default Whatsapp;
