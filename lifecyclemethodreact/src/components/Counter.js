import React, { Component } from "react";
import '../index.css';

class Counter extends Component {
  constructor(props) {
    console.log("Counter Constructor called");
    super(props);
    this.state = {
      allTheCount: this.props.count
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps Method Called");
    if (props.count !== state.allTheCount) {
      return { allTheCount: props.count };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" Should Component Update Called");
    if (this.state.allTheCount < 10) {
      return true;
    }
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(" getSnapshotBeforeUpdate Method Called Previous State: ", prevProps.count);
    return null;
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate Method Called");
  }
  componentDidMount() {
    console.log("Counter Component Mounted");
  }
  render() {
    console.log("Counter Component Rendered");
    return (
      <div>
        <h2>Counter, And your count goes here: <span className="counter">{this.state.allTheCount} </span></h2>
      </div>
    );
  }
}
export default Counter