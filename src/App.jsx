import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Publications from './components/Publications';

function App() {
  return (
    <div className="app">
      <main className="main">
        <Hero />
        <Publications />
      </main>
    </div>
  );
}

export default App;