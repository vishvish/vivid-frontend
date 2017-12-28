import React, { Component } from 'react'
import Article from './Article'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {uuid: this.props.uuid}
  }

  render() {
    return (
      <div className="page">
      <h6>Page</h6>
      <Article uuid={this.props.uuid} />
      </div>
    )

  }
}

export default Page
