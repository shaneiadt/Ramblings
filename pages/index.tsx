import React from 'react'

import "../css/bootsnav.css";
import "../css/font-icons.min.css";
import "../css/theme-vendors.min.css";
import "../css/style.css";
import "../css/responsive.css";

import Header from '../components/header.tsx';

export default function Home() {
  return (
    <div className="page">
      <head>
        <title>Ramblings</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
        <meta name="author" content="Shane O'Moore" />
        <meta name="description" content="Blog and portfolio" />
        <meta name="keywords" content="Developer,JavaScript,CSS,HTML,Software,Programming" />
        <link rel="shortcut icon" href="images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <Header />

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <main className="col-12 col-xl-9 col-lg-8 right-sidebar md-margin-60px-bottom sm-margin-40px-bottom">
              <div className="blog-post-content d-flex align-items-center flex-wrap margin-60px-bottom padding-60px-bottom border-bottom border-color-extra-light-gray md-margin-30px-bottom md-padding-30px-bottom text-center text-md-start md-no-border">
                <div className="col-12 col-lg-5 blog-image p-0 md-margin-30px-bottom sm-margin-20px-bottom margin-45px-right md-no-margin-right">
                  <a href="blog-standard-post.html"><img src="https://via.placeholder.com/1200x840" alt="" /></a>
                </div>
                <div className="col-12 col-lg-6 blog-text p-0">
                  <div className="content margin-20px-bottom md-no-padding-left ">
                    <a href="blog-standard-post.html" className="text-extra-dark-gray margin-5px-bottom alt-font text-extra-large font-weight-600 d-inline-block">Design is thinking made visual</a>
                    <div className="text-medium-gray text-extra-small margin-15px-bottom text-uppercase alt-font"><span>By <a href="blog-grid.html" className="text-medium-gray">Emily Wright</a></span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>17 july 2017</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="blog-grid.html" className="text-medium-gray">Design</a></div>
                    <p className="m-0 w-95 lg-w-100">Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the industry industry’s standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  </div>
                  <a className="btn btn-very-small btn-dark-gray text-uppercase" href="blog-standard-post.html">Continue Reading</a>
                </div>
              </div>
              <div className="col-12 text-center margin-100px-top md-margin-50px-top position-relative wow animate__fadeInUp">
                <div className="pagination text-small text-uppercase text-extra-dark-gray">
                  <ul className="mx-auto">
                    <li><a href="#"><i className="fas fa-long-arrow-alt-left margin-5px-right d-none d-md-inline-block"></i> Prev</a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">Next <i className="fas fa-long-arrow-alt-right margin-5px-left d-none d-md-inline-block"></i></a></li>
                  </ul>
                </div>
              </div>
            </main>
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
          </div>
        </div>
      </section>

      <a className="scroll-top-arrow" onClick={(e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} style={{ display: 'block' }}><i className="ti-arrow-up"></i></a>
    </div>
  )
}
