import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/Home';

// Additional imports
import 'jquery';
import 'popper.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer />
      
    </div>
  );
}

export default App;