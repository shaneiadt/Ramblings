import React from 'react';

export default () => {
    return (
        <aside className="col-12 col-xl-3 col-lg-4 col-md-7">
            <div className="margin-45px-bottom sm-margin-25px-bottom">
                <div className="text-extra-dark-gray margin-20px-bottom alt-font text-uppercase text-small font-weight-600 aside-title"><span>About Me</span></div>
                <a href="about-me.html"><img src="https://via.placeholder.com/800x533" alt="" className="margin-25px-bottom" /></a>
                <p className="margin-20px-bottom text-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard.</p>
                <a className="btn btn-very-small btn-dark-gray text-uppercase" href="about-me.html">About Author</a>
            </div>
            <div className="margin-45px-bottom sm-margin-25px-bottom">
                <div className="text-extra-dark-gray margin-20px-bottom alt-font text-uppercase font-weight-600 text-small aside-title"><span>Categories</span></div>
                <ul className="list-style-6 margin-50px-bottom text-small">
                    <li><a href="blog-masonry.html">Arts and Entertainment</a><span>12</span></li>
                    <li><a href="blog-masonry.html">Blog</a><span>05</span></li>
                    <li><a href="blog-masonry.html">Blog Full width</a><span>08</span></li>
                    <li><a href="blog-masonry.html">Blog Grid</a><span>10</span></li>
                    <li><a href="blog-masonry.html">Branding</a><span>21</span></li>
                    <li><a href="blog-masonry.html">Design Tutorials</a><span>09</span></li>
                    <li><a href="blog-masonry.html">Designing</a><span>07</span></li>
                    <li><a href="blog-masonry.html">Feature</a><span>06</span></li>
                    <li><a href="blog-masonry.html">Home Blog</a><span>10</span></li>
                    <li><a href="blog-masonry.html">Onepage Fashion</a><span>11</span></li>
                    <li><a href="blog-masonry.html">Sample</a><span>06</span></li>
                </ul>
            </div>
            <div className="bg-deep-pink padding-30px-all text-white-2 text-center margin-45px-bottom sm-margin-25px-bottom">
                <i className="fas fa-quote-left icon-small margin-15px-bottom d-block"></i>
                <span className="text-extra-large font-weight-300 margin-20px-bottom d-block">The future belongs to those who believe in the beauty of their dreams.</span>
            </div>
            <div className="margin-45px-bottom sm-margin-25px-bottom">
                <div className="text-extra-dark-gray margin-25px-bottom alt-font text-uppercase font-weight-600 text-small aside-title"><span>tags cloud</span></div>
                <div className="tag-cloud">
                    <a href="blog-grid.html">ADVERTISEMENT</a>
                    <a href="blog-grid.html">ARTISTRY</a>
                    <a href="blog-grid.html">BLOG</a>
                    <a href="blog-grid.html">CONCEPTUAL</a>
                    <a href="blog-grid.html">DESIGN</a>
                    <a href="blog-grid.html">FASHION</a>
                    <a href="blog-grid.html">INSPIRATION</a>
                    <a href="blog-grid.html">SMART</a>
                    <a href="blog-grid.html">QUOTES</a>
                    <a href="blog-grid.html">UNIQUE</a>
                    <a href="blog-grid.html">CONCEPTS</a>
                </div>
            </div>
            <div className="margin-45px-bottom sm-margin-25px-bottom">
                <div className="text-extra-dark-gray margin-25px-bottom alt-font text-uppercase font-weight-600 text-small aside-title"><span>Archive</span></div>
                <ul className="list-style-6 margin-20px-bottom text-small">
                    <li><a href="blog-grid.html">July 2017</a><span>12</span></li>
                    <li><a href="blog-grid.html">June 2017</a><span>05</span></li>
                    <li><a href="blog-grid.html">May 2017</a><span>08</span></li>
                    <li><a href="blog-grid.html">April 2017</a><span>10</span></li>
                    <li><a href="blog-grid.html">March 2017</a><span>21</span></li>
                    <li><a href="blog-grid.html">February 2017</a><span>09</span></li>
                    <li><a href="blog-grid.html">January 2017</a><span>07</span></li>
                </ul>
            </div>
        </aside>
    );
}