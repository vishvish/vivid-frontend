import React, { Component } from 'react'

class Link extends Component {

  render() {
    return (
      <div className={this.props.contentType}>
        <button id={this.props.link.uuid} onClick={this.props.updateArticle}>{this.props.link.fields.title}</button>
      </div>
    )
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  }

}

export default Link
