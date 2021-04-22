import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Cart from '../../components/modals/Cart/Cart';

const Index = () => {
  const [modalCart, setmodalCart] = useState(false);
  const modalHandler = () => {
    setmodalCart(!modalCart);
  };
  return (
    <Container>
      <Button title='Cart' onClick={modalHandler} />
      {modalCart && <Cart buttonHandler={modalHandler} />}
    </Container>
  );
};

export default Index;
