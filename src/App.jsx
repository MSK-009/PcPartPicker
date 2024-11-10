import './App.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Header';
import Home from './pages/Landing';
import Footer from './components/Footer';
import Window from './components/Window';
import Contact from './pages/Contact';
import Processors from './components/Parts/Processors';
import Graphics from './components/Parts/Graphics';
import Motherboard from './components/Parts/Motherboard';
import RAM from './components/Parts/RAM';
import SSD from './components/Parts/SSD';
import Cases from './components/Parts/Cases'
import Power from './components/Parts/Power';
import FinalPage from './pages/FinalPage';


import ListState from './context/list/ListState';
import ProcessorState from './context/processors/ProcessorState';
import GPUState from './context/gpu/GPUState';
import RAMState from './context/ram/RAMState';
import SSDState from './context/ssd/SSDState';
import CaseState from './context/case/CaseState'
import PSUState from './context/psus/PSUState';


function App() {
  const [showWindow, setShowWindow] = useState(false);
  const [windowContent, setWindowContent] = useState('');
  useEffect(() => {
    const savedContent = localStorage.getItem('windowContent');
    if (savedContent) {
      setWindowContent(savedContent);
    }
  }, []);

  const openWindow = () => {
    setShowWindow(true);
  };

  const closeWindow = () => {
    setShowWindow(false);
  };

  const updateContent = () => {
    const content = "";
    setWindowContent(content);
    localStorage.setItem('windowContent', content);
  };
  return (
    <>
      {/* <Window showWindow={showWindow} windowContent={windowContent} closeWindow={closeWindow} /> */}
      <ListState>
        <ProcessorState>
          <GPUState>
            <RAMState>
              <SSDState>
                <CaseState>
                  <PSUState>
                    <BrowserRouter>
                      <Navbar openWindow={openWindow} updateContent={updateContent} />
                      <div>
                        <Routes>
                          <Route exact path="/" element={<Home openWindow={openWindow} updateContent={updateContent} />} />
                          <Route exact path="/about" element={<Contact />} />
                          <Route exact path="/processors" element={<Processors />} />
                          <Route exact path="/gpu" element={<Graphics />} />
                          <Route exact path="/motherboard" element={<Motherboard />} />
                          <Route exact path="/memory" element={<RAM />} />
                          <Route exact path="/storage" element={<SSD />} />
                          <Route exact path="/cases" element={<Cases />} />
                          <Route exact path="/psu" element={<Power />} />
                          <Route exact path="/final" element={<FinalPage />} />
                        </Routes>
                      </div>
                      <Footer />
                    </BrowserRouter>
                  </PSUState>
                </CaseState>
              </SSDState>
            </RAMState>
          </GPUState>
        </ProcessorState>
      </ListState>
    </>
  )
}

export default App;