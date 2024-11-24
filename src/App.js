import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App(){
  return(
    <>
      <div className="App">
    
      <NavBar />    
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      </div>    
    </>
  );
}

export default App;
