import React from 'react'

export default () => (
    <>
        <h2>Sign up for our <span>Newsletter</span></h2>
        <div className="footer-contact">
            <form action="#" method="post">
                <input type="email"
                       name="Email"
                       placeholder="Enter your email...."
                       required=" "/>
                <input
                    type="submit"
                    value="Subscribe"/>
            </form>
        </div>
    </>
);