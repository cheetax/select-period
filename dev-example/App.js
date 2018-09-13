import { SelectPeriod } from '../src/index'
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedA: false,
      checkedB: true,
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const date = new Date();
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Test Input Field</h1>
        </header>       
        <h3>Select Period</h3>
        <div className='App-intro' >
          <SelectPeriod isAction />
        </div>
      </div>
    );
  }
}

export default App;
