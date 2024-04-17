import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { App } from 'components/App';
import { theme } from './styled/Theme';
import { ThemeProvider } from '@emotion/react';
import "./styled/index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router> 
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);