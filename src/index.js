import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Button from './components/Button';
import Modal from './components/Modal'
import Table from './components/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>
);