import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav'

function App() {
  return (
    // JSX not HTML (represents HTML in JS)
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
