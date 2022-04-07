import FooterButton from '../../containers/FooterButton';
import SectionSpliter from '../../containers/SectionSpliter';

import './style.css'

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className='footer-section'>
                <h6>Become a nanny share host</h6>
                <p>Takes less than 5 minutes to get started</p>
                <FooterButton />
                <a href="/">Or browse local nanny-shares</a>
            </div>
            <div className='footer-links'>
                <img src="src\images\footerLogo.svg" alt="Logo" />
                <div className='footer-links-about'>
                    <a href="/">Share Your Nanny</a>
                    <a href="/">Our Story</a>
                    <a href="/">Blog</a>
                    <a href="/">Terms & Privacy</a>
                </div>
                <div className='footer-links-socialmedia'>
                    <img src="src\images\facebook.svg" alt="" />
                    <img src="src\images\twitter.svg" alt="" />
                    <img src="src\images\instagram.svg" alt="" />
                </div>
            </div>
            <div className='footer-copyright'>
                Copyright © 2017 Hapu PTY Limited All rights reserved
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer;