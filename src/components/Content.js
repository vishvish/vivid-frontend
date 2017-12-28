import React, { Component } from 'react'
import Menu from './Menu'
import Page from './Page'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {itemUuid: "e6f7168ad7d24b09b7168ad7d25b09b3"}
    this.updateArticle = this.updateArticle.bind(this)
  }

  updateArticle(e) {
    console.log("Update Article")
    this.setState({
      itemUuid: e.target.id
    });
  }

  render() {
    return (
      <div>
      <h2>Article {this.state.itemUuid}</h2>
      <Menu updateArticle={this.updateArticle}/>
      <Page contents="home" itemUuid={this.state.itemUuid}/>
      </div>
    )

  }
}

export default Content
