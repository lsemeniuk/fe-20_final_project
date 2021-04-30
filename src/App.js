import React from 'react';
import { useSelector } from 'react-redux';
import InitialRoutes from './routes/InitialRoutes';
import { getLockScrollSelector } from './store/modal/selectors';

function App() {
  const lockScroll = useSelector(getLockScrollSelector);
  let styles = {};
  if (lockScroll) {
    styles = { overflow: 'hidden' };
  }

  return (
    <div className='App' style={styles}>
      <InitialRoutes />
    </div>
  );
}

export default App;
