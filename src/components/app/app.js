import './app.css';
import HeaderMusic from '../header-music/header-music';
import Root from '../root/root';
import React from 'react';
import Footer from '../footer';

function App() {
  return (
    <div className="app">
      <HeaderMusic />
      <div className="page">
        <Root />
      </div>
      <Footer />
    </div>
  );
}

export default App;
