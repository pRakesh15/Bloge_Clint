import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { Provider } from 'react-redux';
import { store } from '../src/Redux/Store.tsx';
import {BrowserRouter} from 'react-router-dom';

export const server="http://127.0.0.1:8989/api/vi";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
  <App />
</React.StrictMode>
  </BrowserRouter>
  </Provider>
);

