import React from 'react';
import './App.css'
import {Footer, Header, Possibility, Blog, Features, WhatGPT3} from './containers';
import {Navbar, Brand, Call} from './components'

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Call />
      <Blog />
      <Footer />
    </div>
  )
}

export default App