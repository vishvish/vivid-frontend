import React, { Component } from 'react'
import { Image, Item } from 'semantic-ui-react'

class ArticleImage extends Component {

  smallImageURI() {
    return this.props.src + "?width=420"
  }

  largeImageURI() {
    return this.props.src + "?width=800"
  }

  render() {
    return (
    <Item>
      <Item.Content>
        <Item.Description>
          <Image id={this.props.img.uuid} src={this.smallImageURI()} rounded onClick={this.enlargeImage} />
        </Item.Description>
      </Item.Content>
    </Item>
    )
  }
}

export default ArticleImage
