import React from 'react';
import Routes from './shared/Routes';
import Header from './shared/Header'
import './App.css';

const App = (props) => {
  return (
    <div className="App container">
      <Header />
      <Routes />
    </div>
  );
};
export default App;