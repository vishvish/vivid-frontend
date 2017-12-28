import React, { Component } from 'react'

class Chapter extends Component {

  render() {
    return (
      <div className="chapter">
      <p>{this.props.chapter}</p>
      </div>
    )
  }
}

export default Chapter
