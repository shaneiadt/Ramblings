import React, { FC } from 'react';

import "./css/bootsnav.css";
import "./css/font-icons.min.css";
import "./css/theme-vendors.min.css";
import "./css/style.css";
import "./css/responsive.css";

import Header from './components/header.tsx';
import Aside from './components/aside.tsx';

export default function App({ Page, pageProps }: { Page: FC, pageProps: Record<string, unknown> }) {
  return (
    <main>
      <head>
        <title>Ramblings</title>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
        <meta name="author" content="Shane O'Moore" />
        <meta name="description" content="Blog and portfolio" />
        <meta name="keywords" content="Developer,JavaScript,CSS,HTML,Software,Programming" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
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
              <Page {...pageProps} />
            </main>
            <Aside />
          </div>
        </div>
      </section>

      <a className="scroll-top-arrow" onClick={(e) => {
        e.preventDefault();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }} style={{ display: 'block' }}><i className="ti-arrow-up"></i></a>
    </main>
  )
}
