import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';
import { checkAuthOperation } from './store/customer/operations';
import ToTopButton from './components/ToTop/ToTop';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <ScrollToTop />
      <AppRoutes />
      <ToTopButton />
    </div>
  );
}

export default App;
