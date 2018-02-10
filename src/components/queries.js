import gql from 'graphql-tag'

const queries = {

  getArticle: gql`
  query ArticleQuery($path: String!) {
    node(path: $path) {
      uuid
      path
      tags {
        elements {
          name
        }
      }
      fields {
        ... on article {
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
        path
        tags {
          elements {
            name
          }
        }
        fields {
          ... on article {
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
  { schema(name: "article") {
    nodes {
      elements {
        uuid
        path
        tags {
          elements {
            name
          }
        }
        fields {
          ... on article {
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
  }}
`

}

export default queries
