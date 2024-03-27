import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Form from './components/Form/Form';
import ActDetail from './components/ActDetail/ActDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/addNew',
    element: <Form />
  },
  {
    path: '/:activityId',
    element: <ActDetail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

