import React from 'react';

const Pickup = (props) => {
  const {
    orderRestaurant,
    orderRestaurantAddress,
  } = props.order;
  return (
    <div className="Pickup-container">
      <div className="entry">
        <h4>{orderRestaurant}</h4>
        <h6>{orderRestaurantAddress}</h6>
      </div>
    </div>
  )
}
export default Pickup;