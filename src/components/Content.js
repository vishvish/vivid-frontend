import React, { Component } from 'react'
import ArticleMenu from './ArticleMenu'
import Page from './Page'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articleUuid: this.props.uuid,
    }
    this.updateArticle = this.updateArticle.bind(this)
  }

  updateArticle(e) {
    this.setState({articleUuid: e.target.id})
    console.log("Update Article " + e.target.id)
  }

  render() {
    return (
      <div>
      <ArticleMenu updateArticle={this.updateArticle} />
      <Page page='home' uuid={this.state.articleUuid} />
      </div>
    )
  }
}

export default Content
