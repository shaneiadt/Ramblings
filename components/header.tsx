import React from 'react';

export default () => {
    return (
        <header>
            <nav className="navbar navbar-default bootsnav navbar-top header-light nav-box-width white-link navbar-expand-lg" style={{ backgroundColor: 'lightseagreen' }}>
                <div className="container-fluid nav-header-container">
                    <div className="col-auto ps-0">
                        <a href="/" title="Ramblings" className="logo">Ramblings</a>
                    </div>
                    <div className="col accordion-menu pe-0 pe-md-3">
                        <button type="button" className="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbar-collapse-toggle-1">
                            <span className="sr-only">toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1">
                            <ul id="accordion" className="nav navbar-nav no-margin alt-font text-normal" data-in="animate__fadeIn" data-out="animate__fadeOut">
                                <li className="dropdown megamenu-fw">
                                    <a href="#">About Me</a>
                                </li>
                                <li className="dropdown megamenu-fw">
                                    <a href="#">Blog</a>
                                </li>
                                <li className="dropdown megamenu-fw">
                                    <a href="#">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-auto pe-0">
                        <div className="header-searchbar">
                            <a href="#search-header" className="header-search-form"><i className="fas fa-search search-button"></i></a>
                            <form id="search-header" method="post" action="search-result.html" name="search-header" className="mfp-hide search-form-result">
                                <div className="search-form position-relative">
                                    <button type="submit" className="fas fa-search close-search search-button"></button>
                                    <input type="text" name="search" className="search-input" placeholder="Enter your keywords..." />
                                </div>
                            </form>
                        </div>
                        <div className="header-social-icon d-none d-md-inline-block">
                            <a href="https://github.com/shaneiadt" title="Github" target="_blank"><i className="fab fa-github" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};