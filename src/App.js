import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import ImageGridWithText from './components/ImageGridWithText';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Cards />
      <ImageGridWithText />
    </>
  );
}

export default App;
