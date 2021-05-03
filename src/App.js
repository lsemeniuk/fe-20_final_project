import React, { useState } from 'react';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import MyFilterContainer from './components/SelectBar/MyFilterContainer/MyFilterContainer';
import styles from './App.module.scss';

function App() {
  const [sort] = useState(true);
  const [checkboxed] = useState(true);
  return (
    <div className='App'>
      <NavBar />
      <MyFilterContainer sort={sort} />
      <MyFilterContainer checkboxed={checkboxed} />

      <AppRoutes />

      {/* <MyFilterContainer sort={sort} /> */}
      <div className={styles.divs}>aaa</div>
      <Footer />
    </div>
  );
}

export default App;
