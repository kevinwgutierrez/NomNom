import React from 'react';
import Transaction from './transaction.jsx';

function TransHist(props) {
  return(
    <div className="trans-hist-wrapper">
      {props.transHist.map((transaction, i) => <Transaction transaction={transaction} key={i}/>)}
    </div>
  );
}

export default TransHist;