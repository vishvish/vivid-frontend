import React, { Component } from 'react'
import Link from './Link'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {

  render() {

    // 1
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error</div>
    }

    // 3
    const linksToRender = this.props.allLinksQuery.nodes.elements

    return (
      <div>
      {linksToRender.map(link => (
        <Link key={link.uuid} link={link}/>
      ))}
      </div>
    )
  }
}

// 1
const ALL_LINKS_QUERY = gql`
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
`

// 3
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)
