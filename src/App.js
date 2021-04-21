import React from 'react';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar/NavBar';
import Basement from './components/Basement/Basement';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <AppRoutes />
      <Basement />
    </div>
  );
}
export default App;
