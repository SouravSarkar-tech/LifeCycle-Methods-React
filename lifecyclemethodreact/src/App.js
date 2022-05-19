import React, {Component} from 'react';
import Counter from './components/Counter';
import WillUnmount from './components/WillUnmount';


class App extends Component {
  constructor(props) {
    console.log(" App constructor called");
    super(props);
    this.state = {
      count: 1,
      deleteUser: true
    };
  }
  handleClick = () => {
    console.log("button clicked");
    this.setState({
      count: this.state.count + 1
    });
  };
  componentDidMount() {
    console.log("App Component Mounted");
  }
 
  render() {
    console.log("App Component Rendered");
    return (
      <div className="App">
        <h1>Welcome All!</h1> 
        <h4>Simple Demonstration of all LifeCycle Methods</h4>
        <hr/>
        <h5><strong>Note: </strong>Do not forget to check the console just by clicking  <span className='key'>Shift+CTRL+J</span></h5>
        <Counter count={this.state.count} />
        <button className='handle' onClick={this.handleClick}>Hey! Click here to change the count 😄</button>
        <br/>
        <hr/>
        {this.state.deleteUser && <WillUnmount />}
        <button className='delc btn' onClick={()=>this.setState({deleteUser:false})}><span>Delete Component 🔴</span></button>
      </div>
    );
  }
}
export default App;
