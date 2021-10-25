
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductsProvider } from './context/productsContext';
import { Routes } from './Routes';
import { api } from './services/api'

import { GlobalStyle } from './styles/global';

export function App() {
  useEffect(() => {
    const loadData = async () => {
      api.get('/products')
      .then(response => console.log(response))
    }

    loadData()
  }, [])

  return (
    <BrowserRouter>
      <ProductsProvider>
        <Header />
        <Routes />

        <GlobalStyle />
      </ProductsProvider>
    </BrowserRouter>
  )
}