import React from 'react'

export default function ContactUs({}) {
    // TODO : move to Formik
    return (
        <div className="w3_content_agilleinfo_inner">
            <div className="agile_featured_movies">
                <div className="inner-agile-w3l-part-head">
                    <h3 className="w3l-inner-h-title">
                        Contact us for more info
                    </h3>
                </div>
                <div className="w3_mail_grids">
                    <form action="#" method="post">
                        <div className="col-md-6 w3_agile_mail_grid">
										<span className="input input--ichiro">
											<input className="input__field input__field--ichiro" type="text"
                                                   id="input-25" placeholder=" " required=""/>
											<label className="input__label input__label--ichiro" htmlFor="input-25">
												<span className="input__label-content input__label-content--ichiro">Your Name</span>
											</label>
										</span>
                            <span className="input input--ichiro">
											<input className="input__field input__field--ichiro" type="email"
                                                   id="input-26" placeholder=" " required=""/>
											<label className="input__label input__label--ichiro" htmlFor="input-26">
												<span className="input__label-content input__label-content--ichiro">Your Email</span>
											</label>
										</span>
                            <span className="input input--ichiro">
											<input className="input__field input__field--ichiro" type="text"
                                                   id="input-27" placeholder=" " required=""/>
											<label className="input__label input__label--ichiro" htmlFor="input-27">
												<span className="input__label-content input__label-content--ichiro">Your Phone Number</span>
											</label>
										</span>
                        </div>
                        <div className="col-md-6 w3_agile_mail_grid two">
                            <textarea name="Message" placeholder="Your Message" required="">
                            </textarea>
                            <input type="submit" value="Submit"/>
                        </div>
                        <div className="clearfix">

                        </div>
                    </form>
                    <div className="agileits-get-us">
                        <ul>
                            <li>
                                <i className="fa fa-map-marker" aria-hidden="true">

                                </i>
                                Damascus, Syria
                            </li>
                            <li>
                                <i className="fa fa-phone" aria-hidden="true">

                                </i>
                                +963 966 312 527
                            </li>
                            <li>
                                <i className="fa fa-envelope" aria-hidden="true">

                                </i>
                                <a href="mailto:amoz@moviesstore.com">
                                    amoz@moviesstore.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" map">
                <iframe width="600"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=damscus&t=&z=13&ie=UTF8&iwloc=&output=embed"
                >
                </iframe>
            </div>
        </div>
    );
};