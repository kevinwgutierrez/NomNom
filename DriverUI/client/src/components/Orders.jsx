import React from 'react';
import Order from './Order.jsx';

const Orders = (props) => {
  return (
    <div className='orders-container'>
      <h5>Active Orders</h5>
      {props.orders.map((order, i) => <Order key={i} order={order}/>)}
    </div>
  )
}
export default Orders;