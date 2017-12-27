import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class Article extends Component {

  constructor(props) {
    super(props)
    this.state = {uuid: this.props.uuid}
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    if (this.props.articleQuery.loading) {
      console.log("Loading")
      return (<div>Loading</div>)
    }

    if (this.props.articleQuery.error) {
      console.log(this.props.articleQuery.error)
      return (<div>An unexpected error occurred</div>)
    }

    return (
      <div className="article">
        <h3>Article: for {this.props.articleQuery.node.fields.title}</h3>
        <div class="chapters">
        {this.props.articleQuery.node.fields.chapters.map(function(listValue){
          return <p>{listValue}</p>
        })}
        </div>
        <div class="images">
        {this.props.articleQuery.node.fields.images.map(function(img){
          return <img src={"http://localhost:8080/api/v1/demo/nodes/" + img.uuid + "/binary/binary?width=220"} />
        })}
        </div>
      </div>
    );
  }
}


const ArticleQuery = gql`
query ArticleQuery($uuid: String!) {
  node(uuid: $uuid) {
    path
    fields {
      ... on Article {
        title
        slug
        chapters
        images {
          uuid
        }
      }
    }
  }
}
`;

const ArticleWithUUID = graphql(ArticleQuery, {
  name: 'articleQuery',
  options: {
    variables: {
      uuid: "e6f7168ad7d24b09b7168ad7d25b09b3"
    }
  },
})(Article);

export default ArticleWithUUID;
