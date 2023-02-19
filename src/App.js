import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from "./pages/About";
import Neighborhood from './pages/Neighborhood';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';


function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/neighborhood" element={<Neighborhood/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
            </Routes>
        </Router>
    );
}

export default App;
