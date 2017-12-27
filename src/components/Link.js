import React, { Component } from 'react'

class Link extends Component {

  fetchArticle(e) {
    console.log(e.target.id)
  }

  render() {
    return (
      <div>
        <button id={this.props.link.uuid} onClick={this.fetchArticle}>{this.props.link.fields.title}</button>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

}

export default Link
