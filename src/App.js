import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Contact from './Contact';
import Navbar from './Navbar';
import Home from './Home';
import ControlledCarousel from './ControlledCarousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Admission from './Admission';
import About from './About';
import Whatsapp from './Whatsapp';  
import Activities from './Activities';

function App() {
  return (
    <Router>
       <Navbar />
       <Whatsapp/>
      <div className="App">
          <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='ExampleCarouseImage' element={<ExampleCarouselImage />} />
          <Route path='ControlledCarousel' element={<ControlledCarousel />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Admission' element={<Admission />} />
          <Route path='About' element={<About />} />
          <Route path='Activities' element={<Activities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
