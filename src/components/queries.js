import gql from 'graphql-tag'

const queries = {

  getArticle: gql`
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
  `,
  getMenu: gql`
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
};

export default queries;
