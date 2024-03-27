import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './store/store';
import Form from './components/Form/Form';
import ActDetail from './components/ActDetail/ActDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/addNew" element={<Form />} />
          <Route exact path="/:activityId" element={<ActDetail />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);


