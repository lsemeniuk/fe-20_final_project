import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import CartModal from '../../components/modals/CartModal';

import './Index.scss';

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="Index">
      <h1>First element of the project</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Button onClick={showModal}>Купить часы</Button>
      <CartModal isOpen={isOpen} hideModal={hideModal} />
    </div>
  );
};

export default Index;
