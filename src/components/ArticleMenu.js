import React, { Component } from 'react'
import Link from './Link'
import queries from './queries'
import { compose, graphql } from 'react-apollo';
import { Menu } from 'semantic-ui-react'

class ArticleMenu extends Component {
  render() {
    if (this.props.menuQuery.loading) {
      console.log("Loading Menu")
      return (<div>Loading</div>)
    }

    if (this.props.menuQuery.error) {
      console.log(this.props.data.error)
      return (<div>An unexpected error occurred</div>)
    }

    const linksToRender = this.props.menuQuery.nodes.elements

    return (
      <Menu vertical>
      {linksToRender.map(link => (
        <Link key={link.uuid} link={link} contentType="article" updateArticle={this.props.updateArticle}/>
        ))}
      </Menu>
    )
  }
}

export default compose(
  graphql(queries.getMenu, {
    name: "menuQuery"
  })
)(ArticleMenu)
