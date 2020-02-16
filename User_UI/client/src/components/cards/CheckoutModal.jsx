import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalroot = document.getElementById('modalroot');

class CheckoutModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  render() {
    return ReactDOM.createPortal(
      <div className="modal" id="addToCart">
        <div>Order from RESTAURANT</div>
        <div>Restaurant Address</div>
        <div>Meal Name</div>
        <label>Quantity</label>
        <select onChange={this.handleChange} id="quantity" >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button onClick={() => this.props.submitForm(this.state.quantity)}>Checkout</button>
      </div>
      , modalroot);
  }
}

export default CheckoutModal;