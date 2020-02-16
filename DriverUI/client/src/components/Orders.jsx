import React from 'react';
import Order from './Order.jsx';

const Orders = (props) => {
  return (
    <div className='orders-container'>
      <h5>Active Orders</h5>
      <div id="pickups_container">
        {props.orders.map((order, i) => <Order key={i} order={order} item={i} counter={props.counter}/>)}
      </div>
    </div>
  )
}
export default Orders;