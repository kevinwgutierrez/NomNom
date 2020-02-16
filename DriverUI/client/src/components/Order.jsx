import React from 'react';

const Order = (props) => {
  const {
    orderUser,
    orderUserAddress,
    userLocation,
    orderUserContact,
    orderRestaurant,
    orderRestaurantAddress,
    resLocation
  } = props.order;
  return (
    <div className="Order-container">
      <div>
        <h4>{orderRestaurant}</h4>
        <h6>{orderRestaurantAddress}</h6>
      </div>
      <div>
        <h4>{orderUser}</h4>
        <h6>{orderUserAddress}</h6>
      </div>
    </div>
  )
}
export default Order;