import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">About Us</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut.</p>
                                    <ul className="footer-links">
                                        <li><a href="#"><i className="fa fa-map-marker"/>1734 Stonecoal Road</a></li>
                                        <li><a href="#"><i className="fa fa-phone"/>+021-95-51-84</a></li>
                                        <li><a href="#"><i className="fa fa-envelope-o"/>email@email.com</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Categories</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">Hot deals</a></li>
                                        <li><a href="#">Laptops</a></li>
                                        <li><a href="#">Smart phones</a></li>
                                        <li><a href="#">Cameras</a></li>
                                        <li><a href="#">Accessories</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clearfix visible-xs"/>

                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Information</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Orders and Returns</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Service</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">My Account</a></li>
                                        <li><a href="#">View Cart</a></li>
                                        <li><a href="#">Wish list</a></li>
                                        <li><a href="#">Track My Order</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="bottom-footer" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <ul className="footer-payments">
                                    <li><a href="#"><i className="fa fa-cc-visa"/></a></li>
                                    <li><a href="#"><i className="fa fa-credit-card"/></a></li>
                                    <li><a href="#"><i className="fa fa-cc-paypal"/></a></li>
                                    <li><a href="#"><i className="fa fa-cc-mastercard"/></a></li>
                                    <li><a href="#"><i className="fa fa-cc-discover"/></a></li>
                                    <li><a href="#"><i className="fa fa-cc-amex"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;
