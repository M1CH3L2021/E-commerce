
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './Routes';
import { api } from './services/api'

import { GlobalStyle } from './styles/global';

function App() {
  useEffect(() => {
    const loadData = async () => {
      api.get('/products')
      .then(response => console.log(response))
    }

    loadData()
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes />

      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App