import React, { Component } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Popper from "popper.js";
import $ from "jquery";
// import { DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
// import { bootstrapUtils } from "react-bootstrap/lib/utils";

function ProximitySearch(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">Range</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          className="userButton"
          onClick={e => {
            e.preventDefault();
            props.handleProxSearch(1);
          }}
        >
          Within 1 Mile
        </Dropdown.Item>
        <Dropdown.Item
          className="userButton"
          onClick={e => {
            e.preventDefault();
            props.handleProxSearch(5);
          }}
        >
          Within 5 Miles
        </Dropdown.Item>
        <Dropdown.Item
          className="userButton"
          onClick={e => {
            e.preventDefault();
            props.handleProxSearch(10);
          }}
        >
          Within 10 Miles
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProximitySearch;
