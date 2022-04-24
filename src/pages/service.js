import React, { Component } from 'react'
import PageFooter from '../components/footer'
import PageHeader from '../components/header'
import Loader from '../components/loader'
import PageNavBar from '../components/navbar'
import BackToTopBtn from '../components/toTopBtn'

export class ServicePage extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <PageNavBar />
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="service">
                    <div class="container">
                        <div class="section-header text-center">
                            <p>What We Do?</p>
                            <h2>Premium Services</h2>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-car-wash-1"></i>
                                    <h3>Exterior Washing</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-car-wash"></i>
                                    <h3>Interior Washing</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-vacuum-cleaner"></i>
                                    <h3>Vacuum Cleaning</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-seat"></i>
                                    <h3>Seats Washing</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-car-service"></i>
                                    <h3>Window Wiping</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-car-service-2"></i>
                                    <h3>Wet Cleaning</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-car-wash"></i>
                                    <h3>Oil Changing</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="service-item">
                                    <i class="flaticon-brush-1"></i>
                                    <h3>Brake Reparing</h3>
                                    <p>Lorem ipsum dolor sit amet elit. Phase nec preti facils ornare velit non metus tortor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <PageFooter />
                <BackToTopBtn />
                <Loader />
            </div>
        )
    }
}

export default ServicePage