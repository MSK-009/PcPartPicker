import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Header';
import Home from './pages/Landing';
import Footer from './components/Footer';

function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path="/" element={ <Home /> } />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App;