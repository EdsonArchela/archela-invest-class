import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './global';
import { ToastProvider } from './hooks/ToastContext';

const App: React.FC = () => (
  <Router>
    <ToastProvider>
      <Routes />
    </ToastProvider>
    <GlobalStyle />
  </Router>
);

export default App;
