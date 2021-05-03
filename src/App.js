import React from 'react';
import CustomerSection from './pages/CustomerSection/CustomerSection';
import ProductScreenAdaptive from './pages/ProductScreenAdaptive/ProductScreenAdaptive';
// import InitialRoutes from './routes/InitialRoutes';

function App() {
  return (
    <div className='App'>
      <ProductScreenAdaptive />
      <CustomerSection />
    </div>
  );
}
export default App;
