import React, { Component } from 'react'
import Article from './Article'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {path: this.props.path}
  }

  render() {
    return(
      <Article path={this.props.match.params.path} />
    )
  }
}

export default Page
