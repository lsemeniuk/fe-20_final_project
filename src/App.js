import React from 'react';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
    </div>
  );
}
export default App;
