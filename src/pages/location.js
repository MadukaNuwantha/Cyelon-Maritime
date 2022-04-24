import React, { Component } from 'react'
import PageFooter from '../components/footer'
import PageHeader from '../components/header'
import Loader from '../components/loader'
import PageNavBar from '../components/navbar'
import BackToTopBtn from '../components/toTopBtn'

export class LocationPage extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <PageNavBar />
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Our Branches</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="location">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="section-header text-left">
                                    <p>Branches</p>
                                    <h2>Ceylon Maritime</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="location-item">
                                            <i class="fa fa-map-marker-alt"></i>
                                            <div class="location-text">
                                                <p>123 Street, New York, USA</p>
                                                <p><strong>Call:</strong>+012 345 6789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="location-item">
                                            <i class="fa fa-map-marker-alt"></i>
                                            <div class="location-text">
                                                <p>123 Street, New York, USA</p>
                                                <p><strong>Call:</strong>+012 345 6789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="location-item">
                                            <i class="fa fa-map-marker-alt"></i>
                                            <div class="location-text">
                                                <p>123 Street, New York, USA</p>
                                                <p><strong>Call:</strong>+012 345 6789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="location-item">
                                            <i class="fa fa-map-marker-alt"></i>
                                            <div class="location-text">
                                                <p>123 Street, New York, USA</p>
                                                <p><strong>Call:</strong>+012 345 6789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="location-form">
                                    <h3>Request for a car wash</h3>
                                    <form>
                                        <div class="control-group">
                                            <input type="text" class="form-control" placeholder="Name" required="required" />
                                        </div>
                                        <div class="control-group">
                                            <input type="email" class="form-control" placeholder="Email" required="required" />
                                        </div>
                                        <div class="control-group">
                                            <textarea class="form-control" placeholder="Description" required="required"></textarea>
                                        </div>
                                        <div>
                                            <button class="btn btn-custom" type="submit">Send Request</button>
                                        </div>
                                    </form>
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

export default LocationPage