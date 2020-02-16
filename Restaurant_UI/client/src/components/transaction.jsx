import React from 'react';

function Transaction(props) {
  return(
    <div className="transaction-wrapper">
      {props.transaction}
    </div>
  );
}

export default Transaction;