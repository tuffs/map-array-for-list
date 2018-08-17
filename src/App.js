import React, { Component } from 'react';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    const items = [
      {id: 1, text: 'this'},
      {id: 2, text: 'that'},
      {id: 3, text: 'another'}
    ];
    return ( 
      <div className="app">
        <List items={items} />
      </div>
    );
  }
}

export default App;