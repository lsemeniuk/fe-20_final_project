import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { section } from './App.style';

function App() {
  return (
    <BrowserRouter>
      <div className='App' style={section}>
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
