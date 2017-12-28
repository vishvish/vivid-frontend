import React, { Component } from 'react'
import Article from './Article'

class Page extends Component {
  render() {
    return (
      <div className="page">
      <h6>Page</h6>
      <Article itemUuid={this.props.itemUuid} />
      </div>
    )

  }
}

export default Page
