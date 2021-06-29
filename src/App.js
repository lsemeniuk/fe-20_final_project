import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar/NavBar';
import Popup from './components/Popup/Popup';
import Footer from './components/Footer/Footer';
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
      <Popup />
      <NavBar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
