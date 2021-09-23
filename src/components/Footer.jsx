import React from "react";
import {Link} from "react-router-dom";

function Footer(){
    return (
        <div>
            <footer>
                <div class="footer-container">
                    <div class="footer-left">
                    <h4>Quick Links</h4>

                    <ul>
                        <li>
                        <Link to="/">Home</Link>
                        </li>

                        <li>
                        <a href="#">About</a>
                        </li>

                        <li>
                        <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>

                    <div class="footer-right">
                        <h4>Follow us on</h4>

                        <div class="social-icons">
                            <a href="#">
                            <img src="../images/instagram-logo.png" alt="" />
                            </a>

                            <a href="#">
                            <img src="../images/facebook-logo.png" alt="" />
                            </a>

                            <a href="#">
                            <img src="../images/twitter-logo.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;