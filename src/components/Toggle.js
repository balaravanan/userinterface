import React, { Component } from "react";
import Switch from "react-switch";

export class Toggle extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
          <div>
          <h3>jai Toggle</h3>
        <label>
        <div>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
</div>
        </label>
        </div>
      );
    }
  }

export default Toggle

