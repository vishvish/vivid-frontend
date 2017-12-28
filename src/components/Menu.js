import React, { Component } from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Menu extends Component {
  render() {
    if (this.props.articleMenuQuery.loading) {
      console.log("Loading")
      return (<div>Loading</div>)
    }

    if (this.props.articleMenuQuery.error) {
      console.log(this.props.articleQuery.error)
      return (<div>An unexpected error occurred</div>)
    }

    const linksToRender = this.props.articleMenuQuery.nodes.elements

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

const ArticleMenuQuery = gql`
{
  nodes(query: "{\\"query\\":{\\"query_string\\":{\\"query\\":\\"article\\"}}}") {
    elements {
      uuid
      fields {
        ... on Article {
          slug
          title
        }
      }
    }
    totalCount
  }
}
`;

const MenuWithData = graphql(ArticleMenuQuery, {
  name: 'articleMenuQuery',
})(Menu);

export default MenuWithData;

