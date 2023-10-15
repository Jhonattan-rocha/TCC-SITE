import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, {persistor} from './store';
import Routes from './Routes';
import GlobalStyles from "./styles/GlobalStyles";
import history from './services/history';

function App() {
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter location={history.location} navigator={history}>
          <Routes/>
          <GlobalStyles />
          <ToastContainer autoClose={4000}  className="toastcontainer"/>
        </BrowserRouter>   
      </PersistGate>
    </Provider>
  );
}

export default App;
