/* @flow */
import React, { Component } from 'react'
import Content from './Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: "home",
      itemUuid: "none",
      date: new Date()
    };
  }

    render() {
    return (
      <Content />
    )
  }
}

export default App
