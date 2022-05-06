import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import ScrollToTop from "./utils/ScrollToTop";
import Navigation from './components/Navbar';
import HomePage from './pages/home/home';
import AboutPage from './pages/aboutus/about';
import ContactPage from './pages/contact/contact';
import ProductsPage from './pages/products/Products';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';
import CartError from './components/CartError';
import CartPage from './pages/cart/cart';
// import ProductsGrid from './components/SingleProduct';
import { motion } from "framer-motion";

import './App.css';

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "spring",
  ease: "linear",
  damping: 10,
  stiffness: 50,
  // duration: 1
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

// export const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence exitBeforeEnter>
//       <Routes location={location} key={location.pathname}>
//         <Route element={<Wrapper />}>
//           <Route path='/' element={<HomePage />}/>
//           <Route index element={<HomePage />} />
//           <Route path='products' element={<ProductsPage />} />
//           <Route index element={<ProductsPage />} /> 
//           <Route exact path='products/:productId' element={<SingleProduct />} />
//           <Route path='about' element={<AboutPage />}/>
//           <Route path='contact' element={<ContactPage />}/>
//         </Route>
//       </Routes>
//     </AnimatePresence>
//   );
// };

function App() {
  // const location = useLocation();
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path='/' element={<HomePage />}/>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route index element={<ProductsPage />} /> 
          <Route exact path='products/:productId' element={<SingleProduct />} />
          <Route path='about' element={<AboutPage />}/>
          <Route path='contact' element={<ContactPage />}/>
          <Route path='cart' element={<CartPage />}/>
          <Route path='carterror' element={<CartError />}/>
        </Route>
      </Routes>
      <ScrollToTop>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
