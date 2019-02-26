import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './index.css';

const GlobalStyle = createGlobalStyle`
    body {
        margin-left: 5% !important;
        margin-right: 5% !important;
    }
`;

ReactDOM.render(
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
