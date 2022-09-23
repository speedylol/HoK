import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
