import React, { Component } from 'react'
import Article from './Article'
import Home from './Home'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {uuid: this.props.uuid}
  }

  render() {
    if(this.props.page === 'home') {
      return(
        <div className="page">
        <Home uuid={this.props.uuid} />
        </div>
      )
    } else {
      return(
        <div className="page">
        <h6>Page</h6>
        <Article uuid={this.props.uuid} />
        </div>
      )
    }
  }
}

export default Page
