import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

class ArticleImage extends Component {

  smallImageURI() {
    return this.props.src + "?width=220"
  }

  largeImageURI() {
    return this.props.src + "?width=800"
  }

  render() {
    return (
      <Image id={this.props.img.uuid} src={this.smallImageURI()} rounded onClick={this.enlargeImage} />
    )
  }
}

export default ArticleImage
