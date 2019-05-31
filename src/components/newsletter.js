import React, {Component} from 'react';

class NewsLetter extends Component {
    render() {
        let {match} = this.props;
        return (
            <div id="newsletter" className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="newsletter">
                                <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                                <form>
                                    <input className="input" type="email" placeholder="Enter Your Email">
                                        <button className="newsletter-btn"><i className="fa fa-envelope"/> Subscribe
                                        </button>
                                    </input>
                                </form>
                                <ul className="newsletter-follow">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook"/></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter"/></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram"/></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-pinterest"/></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default NewsLetter;
