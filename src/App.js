import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import MyFilterContainer from './components/SelectBar/MyFilterContainer/MyFilterContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <MyFilterContainer sort={sort} />
      <MyFilterContainer checkboxed={checkboxed} />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
