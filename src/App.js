import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";
import Navigation from './components/Navbar';
import HomePage from './pages/home/home';
import ProductsPage from './pages/products/Products';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
// import ProductsGrid from './components/SingleProduct';
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
            <Route index element={<ProductsPage />} /> 
            <Route exact path='products/:productId' element={<SingleProduct />} />
        </Routes>
        <ScrollToTop>
          <Footer />
      </ScrollToTop>
    </BrowserRouter>
    </>
  );
}

export default App;
