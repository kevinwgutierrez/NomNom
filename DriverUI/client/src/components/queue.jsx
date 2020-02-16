import React from 'react';

const Queue = (props) => (
    <button className="queueItem" onClick={() => props.setNext(props.order.coords)}>
      {props.order.orderId} : {props.order.orderUser}
    </button>
)

export default Queue;