import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { checkAuthOperation } from './store/customer/operations';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

  return (
    <div className='App'>
      <NavBar />
      <Breadcrumbs />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
