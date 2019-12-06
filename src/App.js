import React from 'react';
import './App.css';

class App extends React.Component{

  //---- First create the intital state ----//
  state = {
    clicks:0,
  }

  //---- Create a function that causes the state to change with set state ----//
  incrementItem = () => {
    this.setState ({clicks: this.state.clicks + 1})
  }
  decrementItem = () => {
    this.setState ({clicks: this.state.clicks - 1})
  }

  render(){
    return(

      // return the information in via HTML
      <div>
      <h1>{this.state.clicks}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    )
  }

}

export default App;
