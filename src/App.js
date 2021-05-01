import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InitialRoutes from './routes/InitialRoutes';
import { checkAuthOperation } from './store/customer/operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthOperation());
  }, []);

  return (
    <div className='App'>
      <InitialRoutes />
    </div>
  );
}

export default App;
