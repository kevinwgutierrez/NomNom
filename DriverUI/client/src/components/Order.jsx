import React from 'react';

const Order = (props) => {
  const {
    orderUser,
    orderUserAddress,
  } = props.order;
  return (
    <div className="Order-container">
      <div className="entry" id={props.counter - 1 === props.item ? 'current_order' : 'none'}>
        <h4>{orderUser}</h4>
        <h6>{orderUserAddress}</h6>
      </div>
    </div>
  )
}
export default Order;