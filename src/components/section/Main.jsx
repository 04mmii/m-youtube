import React from 'react'
import Headder from './Header';
import Footer from './Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Webs Youtube" 
        defaultTitle="Webs Youtube" 
        defer={false}
      >
          {props.title && <title>{props.title}</title>}
          <meta name="description" content={props.description} />
      </Helmet>
      <Headder />
      <main id='main' role='main'>
        {props.children}
      </main>
      <Footer />
    </HelmetProvider>


  )
}

export default Main