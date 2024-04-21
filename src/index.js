import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { App } from 'components/App';
import { theme } from './styled/Theme';
import { ThemeProvider } from '@emotion/react';
import "./styled/index.css"
import store from './redux/store'; 
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Обгортка додатка з Provider */}
      <ThemeProvider theme={theme}>
        <Router> 
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);