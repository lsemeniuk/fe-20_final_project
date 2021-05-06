import { $authHost } from './index';

// @route   POST /orders
// @desc    Place Order
// @access  Private
export const placeOrder = async () => {
  const { data } = await $authHost.post('orders');
  return data;
};

// @route   PUT /orders/:id
// @desc    Update order
// @access  Private
export const updateOrder = async id => {
  const { data } = await $authHost.put(`orders${id}`);
  return data;
};

// @route   PUT /orders/cancel/:id
// @desc    Cancel order
// @access  Private
export const cancelOrder = async id => {
  const { data } = await $authHost.put(`orders/cancel${id}`);
  return data;
};

// @route   DELETE /orders/:id
// @desc    Delete order
// @access  Private
export const deleteOrder = async id => {
  const { data } = await $authHost.delete(`orders/${id}`);
  return data;
};

// @route   GET /orders
// @desc    Get all orders
// @access  Private
export const getAllOrders = async () => {
  const { data } = await $authHost.get('orders');
  return data;
};

// @route   GET /orders/:orderNo
// @desc    Get one order by orderNo
// @access  Private
export const getOrderByNo = async orderNo => {
  const { data } = await $authHost.get(`orders/${orderNo}`);
  return data;
};
