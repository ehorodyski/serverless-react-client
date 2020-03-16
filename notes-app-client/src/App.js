import React from 'react';
import Header from './shared/components/Header';
import Routes from './shared/Routes';
import './App.css';

const App = () => {

  return (
    <div className="App container">
      <Header title="Notes"></Header>
      <Routes />
    </div>
  );
};
export default App;