import React, { Component } from 'react'
import PageFooter from '../components/footer'
import PageHeader from '../components/header'
import Loader from '../components/loader'
import PageNavBar from '../components/navbar'
import BackToTopBtn from '../components/toTopBtn'

export class ContactPage extends Component {
    render() {
        return (
            <div>
                <PageHeader />
                <PageNavBar />
                <div class="page-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <h2>Contact Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact">
                    <div class="container">
                        <div class="section-header text-center">
                            <p>Get In Touch</p>
                            <h2>Contact for any query</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-5">
                                <div class="contact-info">
                                    <h2>Quick Contact Info</h2>
                                    <div class="contact-info-item">
                                        <div class="contact-info-icon">
                                            <i class="fa fa-map-marker"></i>
                                        </div>
                                        <div class="contact-info-text">
                                            <h3>Location</h3>
                                            <p>No 7 1/4E, Colombo</p>
                                        </div>
                                    </div>
                                    <div class="contact-info-item">
                                        <div class="contact-info-icon">
                                            <i class="fa fa-phone-alt"></i>
                                        </div>
                                        <div class="contact-info-text">
                                            <h3>Call Us</h3>
                                            <p>+94 70 111 9232</p>
                                        </div>
                                    </div>
                                    <div class="contact-info-item">
                                        <div class="contact-info-icon">
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <div class="contact-info-text">
                                            <h3>Email Us</h3>
                                            <p>info@ceylonmaritime.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="contact-form">
                                    <div id="success"></div>
                                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                                        <div class="control-group">
                                            <input type="text" class="form-control" id="name" placeholder="Your Name"
                                                required="required" data-validation-required-message="Please enter your name" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="email" class="form-control" id="email" placeholder="Your Email"
                                                required="required" data-validation-required-message="Please enter your email" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <input type="text" class="form-control" id="subject" placeholder="Subject"
                                                required="required" data-validation-required-message="Please enter a subject" />
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div class="control-group">
                                            <textarea class="form-control" id="message" placeholder="Message" required="required"
                                                data-validation-required-message="Please enter your message"></textarea>
                                            <p class="help-block text-danger"></p>
                                        </div>
                                        <div>
                                            <button class="btn btn-custom" type="submit" id="sendMessageButton">Send
                                                Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.095690792177!2d79.85793311477266!3d6.879138495029023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25124a68b0041%3A0xe6ef48de0150d052!2sCeylon%20Maritime%20Agencies%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1650775841836!5m2!1sen!2slk"
                                    width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ContactPage