
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './services/DataProvider';

import { Header } from './components/Header';
import { Routes } from './Routes';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000}/>
        <GlobalStyle />
      </DataProvider>
    </Router>
  )
}