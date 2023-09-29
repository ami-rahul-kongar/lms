import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import './index.css';
import { Provider } from 'react-redux';
import { store } from "./Components/Redux/Store"; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
