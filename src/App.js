import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";
import Navigation from './components/Navbar';
import HomePage from './pages/home/home';
import ProductsPage from './pages/products/Products';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
        </Routes>
        <ScrollToTop>
          <Footer />
      </ScrollToTop>
    </BrowserRouter>
    </>
  );
}

export default App;
