import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import "./i18nextInit";
import './assets/css/hypdex.css'
import './assets/css/hypdex-responsive.css'
import loader from "./assets/images/loader.png"

import { Provider } from 'react-redux';
import store from './store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loading = (
  <div className="preloader">
    <img className="preloader__image" width="60" src={loader} alt="" />
  </div>
)

// Containers
const Layout = React.lazy(() => import('./components/application/layout'));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <React.Suspense fallback={loading}>
        <ToastContainer className="toast-hyperdex"
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
        <Layout />
      </React.Suspense>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
