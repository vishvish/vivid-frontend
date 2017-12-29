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
          synopsis
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
            title
            slug
          }
        }
      }
      totalCount
    }
  }
`,
  getHome: gql`
  {
    nodes(query: "{\\"query\\":{\\"query_string\\":{\\"query\\":\\"article\\"}}}") {
      elements {
        uuid
        fields {
          ... on Article {
            title
            slug
            synopsis
            images {
              uuid
              fields {
                ... on binary_content {
                  featured
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`

};

export default queries;
