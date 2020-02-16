import React from 'react';
import Pickup from './Pickup.jsx';

const Pickups = (props) => {
  return (
    <div className='orders-container'>
      <h5>Active Pickups</h5>
      <div id="pickups_container">
        {props.pickups.map((order, i) => <Pickup key={i} order={order}/>)}
      </div>
    </div>
  )
}
export default Pickups;