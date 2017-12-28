import React, { Component } from 'react'
import Link from './Link'
import queries from './queries'
import { compose, graphql } from 'react-apollo';

class Menu extends Component {
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
      <div className="menu">
      <h6>Menu</h6>
      <ul>
      {linksToRender.map(link => (
        <Link key={link.uuid} link={link} contentType="article" updateArticle={this.props.updateArticle}/>
        ))}
      </ul>
      </div>
    )
  }
}

export default compose(
  graphql(queries.getMenu, {
    name: "menuQuery"
  })
)(Menu)

