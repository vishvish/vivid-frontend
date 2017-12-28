import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class Link extends Component {

  render() {
    return (
      <Menu.Item id={this.props.link.uuid} name={this.props.link.fields.title} onClick={this.props.updateArticle}>
        {this.props.link.fields.title}
      </Menu.Item>
    )
  }
}

export default Link
