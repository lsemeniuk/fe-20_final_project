import { $authHost } from './index';

// @route   POST /orders
// @desc    Place Order
// @access  Private
export const placeOrder = async values => {
  const res = await $authHost.post('orders', values).catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /orders/:id
// @desc    Update order
// @access  Private
export const updateOrder = async id => {
  const res = await $authHost.put(`orders/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   PUT /orders/cancel/:id
// @desc    Cancel order
// @access  Private
export const cancelOrder = async id => {
  const res = await $authHost.put(`orders/cancel/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   DELETE /orders/:id
// @desc    Delete order
// @access  Private
export const deleteOrder = async id => {
  const res = await $authHost.delete(`orders/${id}`).catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /orders
// @desc    Get all orders
// @access  Private
export const getAllOrders = async () => {
  const res = await $authHost.get('orders').catch(err => {
    throw err;
  });
  return res;
};

// @route   GET /orders/:orderNo
// @desc    Get one order by orderNo
// @access  Private
export const getOrderByNo = async orderNo => {
  const res = await $authHost.get(`orders/${orderNo}`).catch(err => {
    throw err;
  });
  return res;
};
