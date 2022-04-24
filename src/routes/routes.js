import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages';
import AboutPage from '../pages/about';
import ContactPage from '../pages/contact';
import LocationPage from '../pages/location';
import ServicePage from '../pages/service';


export class PageRoutes extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/location' element={<LocationPage />} />
                    <Route path='/service' element={<ServicePage />} />
                </Routes>
            </Router>
        )
    }
}

export default PageRoutes