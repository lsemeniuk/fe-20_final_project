import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
