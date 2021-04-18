import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CartModal.scss';
import data from './data';
import Button from '../Button/Button';

const CartModal = ({ isOpen, hideModal }) => {
  const [qty, setQty] = useState(1);

  const incrementQty = () => {
    setQty(qty + 1);
  };
  const decrementQty = () => {
    setQty(qty - 1);
  };
  console.log(+qty);
  return (
    <Modal show={isOpen} onHide={hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title className="title">Корзина</Modal.Title>
        <div className="d-flex align-self-end qty-price">
          <p className="mr-4">количество</p>
          <p className="ml-4">стоимость</p>
        </div>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {data.cart.map(item => (
            <li key={item.id} className="modal__item-box">
              <div className="row">
                <div>
                  <button type="button" onClick={() => console.log('Deleted!')} className="btn-delete">
                    <img src="https://image.flaticon.com/icons/svg/709/709519.svg" alt="delete icon" />
                  </button>
                </div>
                <div>
                  <img src={item.image} alt={item.name} className="small" />
                </div>
                <div>
                  <Link to={`/product/${item.id}`} className="modal__link-product">
                    {item.name}
                  </Link>
                </div>
                <div className="input-box">
                  <Button className="modal__btn-plus" onClick={() => decrementQty()} disabled={qty === 1}>
                    -
                  </Button>
                  <input className="input__field" type="text" name="qty" value={qty} readOnly />
                  <Button
                    className="modal__btn-plus"
                    onClick={() => incrementQty()}
                    disabled={qty === item.countInStock}
                  >
                    +
                  </Button>
                </div>
                <div className="total__cost">{qty * item.price} грн</div>
              </div>
            </li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <h3>Modal Footer</h3>
      </Modal.Footer>
    </Modal>
  );
};
CartModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
export default CartModal;
