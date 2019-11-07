import React from 'react';

const Footer = () => {
    return (
        
         <div> 
            <div className="row">
                <div className="col-md-12">
                   
                <div className="footer p-3 mt-4 text-center bg-dark text-light">
                Developed by: <span className="author">Madhu Dutta</span>
            
                <span className="techUsed">Technology used:  <i className="fab fa-react fa-2x" /> ReactJs &amp; Redux JS, Integrated with external api
                <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer" >omdbapi</a>
                </span>

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
  </div>
    )
}

export default Footer;
