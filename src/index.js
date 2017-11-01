import React from 'react';
import ReactDOM from 'react-dom';
import './vendors/bootstrap-grid.css';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
<MuiThemeProvider>
<App />
</ MuiThemeProvider>
, document.getElementById('root'));
registerServiceWorker();
