import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import StackList from './StackList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>FlashCard</h2>
        <hr />
        <StackList />
        <hr />
        <Link to = 'stack_form'><h4>Create a new Stack</h4></Link>
      </div>
    );
  }
}

export default App;
