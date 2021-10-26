
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { Header } from './components/Header';
import { Routes } from './Routes';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} style={{fontSize: '1.4rem', width: '35rem'}}/>
        <GlobalStyle />
      </CartProvider>
    </Router>
  )
}