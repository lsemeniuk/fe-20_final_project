import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import { checkAuthOperation } from './store/customer/operations';
import NavBar from './components/NavBar/NavBar';
import ToTopButton from './components/ToTop/ToTop';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <AppRoutes />
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
