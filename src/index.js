import React from 'react';
import { getFirestoreApp } from './firebase/config';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

getFirestoreApp()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


