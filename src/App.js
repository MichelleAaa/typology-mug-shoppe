import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
    <Navigation />
    <Header />
    </>
  );
}

export default App;
