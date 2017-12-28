import React, { Component } from 'react'
import queries from './queries'
import { compose, graphql } from 'react-apollo'
import Chapter from './Chapter'
import ArticleImage from './ArticleImage'
import { Dimmer, Loader, Image, Segment, Menu, Header, Item, Card, Icon } from 'semantic-ui-react'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {uuid: this.props.uuid}
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    if (this.props.homeQuery.loading) {
      console.log("Loading Home " + this.props.uuid)
      return (
        <Segment>
        <Dimmer active>
        <Loader />
        </Dimmer>
        <Image src='/assets/images/wireframe/short-paragraph.png' />
        </Segment>
      )
    }

    if (this.props.homeQuery.error) {
      console.log(this.props.homeQuery.error)
      return (<div>An unexpected error occurred</div>)
    }

    const articles = this.props.homeQuery.nodes.elements

    return (
      <Card.Group itemsperRow={6}>
      {articles.map(article => (
        <Card>
          <Image src={"http://localhost:8080/api/v1/demo/nodes/" + article.fields.images[Math.floor(Math.random()*article.fields.images.length)].uuid + "/binary/binary"} />
          <Card.Content>
            <Card.Header>
              {article.fields.title}
            </Card.Header>
            <Card.Meta>
              <Icon name='like' />
            </Card.Meta>
            <Card.Description>
              {article.fields.synopsis}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='image' />
              {article.fields.images.length}
            </a>
          </Card.Content>
        </Card>
      ))}
      </Card.Group>
    )
  }
}

export default compose(
  graphql(queries.getHome, {
    name: 'homeQuery'
  }),
)(Home)


// {articles.map(article => (
//   <h3>{article.title}</h3>
//   {article.images.map(function(img, index){
//     return (
//       <ArticleImage key={index} img={img} src={"http://localhost:8080/api/v1/demo/nodes/" + img.uuid + "/binary/binary"} />
//     )
//   })}
// ))}
