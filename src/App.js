import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { section } from './App.style';

function App() {
  return (
    <>
      <div className="App" style={section}>
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
