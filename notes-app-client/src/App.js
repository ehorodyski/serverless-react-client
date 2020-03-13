import React from 'react';
import Header from './shared/components/Header';
import Routes from './shared/Routes';
import { UserProvider } from './shared/hooks/useUser';
import './App.css';

const App = (props) => {

  return (
    <UserProvider>
      <div className="App container">
        <Header title="Foo"></Header>
        <Routes />
      </div>
    </UserProvider>
  );
};
export default App;