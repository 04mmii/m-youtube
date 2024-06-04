import React from 'react'
import Headder from './Header';
import Footer from './Footer';

const Main = (props) => {
  return (
    <>
      <Headder />
      <main id='main' role='main'>
        {props.children}
      </main>
      <Footer />
    </>
  )
}

export default Main