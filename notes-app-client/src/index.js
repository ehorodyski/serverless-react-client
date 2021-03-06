import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify';
import AmplifyConfiguration from './config';
import { UserProvider } from './shared/hooks/useUser';

const AppContainer = () => {
  return (
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  );
};
console.log(AmplifyConfiguration);
Amplify.configure(AmplifyConfiguration);
ReactDOM.render(<AppContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
