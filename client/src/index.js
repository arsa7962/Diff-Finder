import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    primary: {
      main: '#bb86fc'
    },
    secondary: {
      main: '#1d1d1d'
    }
  }
});

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
  </React.StrictMode>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
