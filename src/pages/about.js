import React, { Component } from 'react'
import PageFooter from '../components/footer'
import PageHeader from '../components/header'
import Loader from '../components/loader'
import PageNavBar from '../components/navbar'
import BackToTopBtn from '../components/toTopBtn'

export class AboutPage extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <PageNavBar />
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="about-img">
                                    <img src="../assets/img/about.jpg" alt="Image" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="section-header text-left">
                                    <p>About Us</p>
                                    <h2>Ceylon Maritime</h2>
                                </div>
                                <div class="about-content">
                                    <p>
                                        Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut
                                        vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget
                                        velit luctus dictum
                                    </p>
                                    <ul>
                                        <li><i class="far fa-check-circle"></i>Service 1</li>
                                        <li><i class="far fa-check-circle"></i>Service 2</li>
                                        <li><i class="far fa-check-circle"></i>Service 3</li>
                                        <li><i class="far fa-check-circle"></i>Service 4</li>
                                    </ul>
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

export default AboutPage