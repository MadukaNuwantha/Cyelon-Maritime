import React, { Component } from 'react'
import PageFooter from '../components/footer'
import PageHeader from '../components/header'
import Loader from '../components/loader'
import PageNavBar from '../components/navbar'
import BackToTopBtn from '../components/toTopBtn'

export class HomePage extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <PageNavBar />
                <div class="carousel">
                    <div class="container-fluid">
                        <div class="owl-carousel">
                            <div class="carousel-item">
                                <div class="carousel-img">
                                    <img src="../assets/img/carousel-1.jpg" alt="Image" />
                                </div>
                                <div class="carousel-text">
                                    <h3>CEYLON MERITIME</h3>
                                    <h1>Lorem Ipsum</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                                    </p>
                                    <a class="btn btn-custom" href="">Explore More</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-img">
                                    <img src="../assets/img/carousel-2.jpg" alt="Image" />
                                </div>
                                <div class="carousel-text">
                                    <h3>CEYLON MERITIME</h3>
                                    <h1>Lorem Ipsum</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                                    </p>
                                    <a class="btn btn-custom" href="">Explore More</a>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-img">
                                    <img src="../assets/img/carousel-3.jpg" alt="Image" />
                                </div>
                                <div class="carousel-text">
                                    <h3>CEYLON MERITIME</h3>
                                    <h1>Lorem Ipsum</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                                    </p>
                                    <a class="btn btn-custom" href="">Explore More</a>
                                </div>
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

export default HomePage