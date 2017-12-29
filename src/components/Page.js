import React, { Component } from 'react'
import Article from './Article'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {uuid: this.props.uuid}
  }

  render() {
    return(
      <Article uuid={this.props.match.params.uuid} />
    )
  }
}

export default Page
