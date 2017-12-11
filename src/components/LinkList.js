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
  # 2
{
  nodes(perPage: 20, page: 2) {
    elements {
      uuid
      path
    }
    # Total amount of found elements
    totalCount
    # Total amount of found pages. Each page has a size of 2
    pageCount
    # Size of the current page. The last page may only contain a few elements
    size
    # Current per page size
    perPage
    # Flag which indicates whether another page exists
    hasNextPage
    # Flag which indicates whether a previous page exists
    hasPreviousPage
  }
}
`

// 3
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)
