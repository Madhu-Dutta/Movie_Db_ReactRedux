import React from 'react';

const Footer = () => {
    return (
        <div className="site-footer">
            <div className="row">
            <div className="col-md-4">
                Developed by: <span className="author">Madhu Dutta</span>
            </div>
            <div className="col-md-4">
               Technology used:  <i className="fab fa-react fa-2x" /> ReactJs &amp; Redux JS, Integrated with external api
                <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" >The MovieDB</a>
            </div>

            <div className="col-md-4">
                <ul className="social-links-list">
                <span className="follow">Follow on: </span>
                    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                        <i className="fab fa-twitter fa-2x" />
                    </a>
                    </li>
                    <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="github">
                        <i className="fab fa-github fa-2x" />
                    </a>
                    </li>
                    <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
                        <i className="fab fa-linkedin fa-2x" />
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Footer;
