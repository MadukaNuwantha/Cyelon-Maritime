import React, { Component } from 'react'

export class PageNavBar extends Component {
    render() {
        return (
            <div>
                <div class="nav-bar">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                            <a href="#" class="navbar-brand">MENU</a>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div class="navbar-nav mr-auto">
                                    <a href="/" class="nav-item nav-link">Home</a>
                                    <a href="/about" class="nav-item nav-link">About Us</a>
                                    <a href="/service" class="nav-item nav-link">Our Services</a>
                                    <a href="/location" class="nav-item nav-link">Our Branches</a>
                                    <a href="/contact" class="nav-item nav-link">Contact</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNavBar