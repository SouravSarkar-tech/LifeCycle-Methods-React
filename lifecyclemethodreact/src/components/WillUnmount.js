import React, { Component } from "react";
import '../index.css';



class WillUnmount extends Component {
componentWillUnmount() {
    console.log("App Unmounted");
  }
 
  render() {
    return (
      <div>
        <h2 className='DeleteComponent'>Click on the button below and Go to console to check <span>componentWillUnmount(😉)</span> method is called</h2>
      </div>
    );
  }
}
export default WillUnmount