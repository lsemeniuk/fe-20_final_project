import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CustomerSection from './pages/CustomerSection/CustomerSection';
import ProductScreenAdaptive from './pages/ProductScreenAdaptive/ProductScreenAdaptive';
// import InitialRoutes from './routes/InitialRoutes';
import { checkAuthOperation } from './store/customer/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

  return (
    <div className='App'>
      <ProductScreenAdaptive />
      <CustomerSection />
    </div>
  );
}
export default App;
