import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'

class Chapter extends Component {

  render() {
    return (
    <Item>
      <Item.Content>
        <Item.Description>
          <p>{this.props.chapter}</p>
        </Item.Description>
      </Item.Content>
    </Item>
    )
  }
}

export default Chapter
