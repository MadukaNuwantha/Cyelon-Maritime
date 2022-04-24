import React, { Component } from 'react'

export class PageHeader extends Component {
    render() {
        return (
            <div>
                <div class="top-bar">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-4 col-md-12">
                                <div class="logo">
                                    <a href="/">
                                        <img src="../assets/img/Logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7 d-none d-lg-block">
                                <div class="row">
                                    <div class="col-4">
                                        <div class="top-bar-item">
                                            <div class="top-bar-icon">
                                                <i class="fa fa-map-marker"></i>
                                            </div>
                                            <div class="top-bar-text">
                                                <h3>Address</h3>
                                                <p>No 7 1/4E, Colombo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="top-bar-item">
                                            <div class="top-bar-icon">
                                                <i class="fa fa-phone-alt"></i>
                                            </div>
                                            <div class="top-bar-text">
                                                <h3>Call Us</h3>
                                                <p>+94 70 111 9232</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div class="top-bar-item">
                                            <div class="top-bar-icon">
                                                <i class="far fa-envelope"></i>
                                            </div>
                                            <div class="top-bar-text">
                                                <h3>Email Us</h3>
                                                <p>info@ceylonmaritime.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageHeader