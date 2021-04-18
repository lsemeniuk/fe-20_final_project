import React from 'react';
import AppRoutes from './routes/AppRoutes';
import styles from './App.scss';

function App() {
  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
}
export default App;
