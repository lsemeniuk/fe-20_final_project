import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { checkAuthOperation } from './store/customer/operations';
import { getWishListOperation } from './store/wishList/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthOperation());
    dispatch(getWishListOperation());
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
