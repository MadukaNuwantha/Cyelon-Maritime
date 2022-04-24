import React, { Component } from 'react'

export class PageFooter extends Component {
    render() {
        return (
            <div>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-contact">
                                    <h2>Get In Touch</h2>
                                    <p><i class="fa fa-map-marker-alt"></i>No 7 1/4E, Colombo</p>
                                    <p><i class="fa fa-phone-alt"></i>+94 70 111 9232</p>
                                    <p><i class="fa fa-envelope"></i>info@ceylonmaritime.com</p>
                                    <div class="footer-social">
                                        <a class="btn"
                                            href="https://web.facebook.com/Ceylon-Maritime-Agencies-Pvt-Ltd-100272029235518/?ref=page_internal&_rdc=1&_rdr"><i
                                                class="fab fa-facebook-f"></i></a>
                                        <a class="btn"
                                            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x3ae25124a68b0041:0xe6ef48de0150d052?source=g.page.m._"><i
                                                class="fab fa-google"></i></a>
                                        <a class="btn" href="https://www.instagram.com/ceylonmaritime/?utm_medium=copy_link"><i
                                            class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://www.linkedin.com/company/ceylon-maritime-agencies-pvt-ltd"><i
                                            class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="footer-link">
                                    <h2>Popular Links</h2>
                                    <a href="/about">About Us</a>
                                    <a href="/contact">Contact Us</a>
                                    <a href="/service">Our Service</a>
                                    <a href="/location">Service Points</a>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="footer-newsletter">
                                    <h2>Contact Us</h2>
                                    <form>
                                        <input class="form-control" placeholder="Full Name" />
                                        <input class="form-control" placeholder="Email" />
                                        <button class="btn btn-custom">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container copyright">
                        <p>&copy; <a href="index.html">CeylonMeritime.com</a>, All Right Reserved. Designed By <a
                            href="#">L(AB)S</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageFooter