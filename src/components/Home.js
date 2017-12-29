import React, { Component } from 'react'
import queries from './queries'
import { compose, graphql } from 'react-apollo'
import { Dimmer, Loader, Image, Segment, Card, Icon, Header } from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

class Home extends Component {
  render() {
    if (this.props.homeQuery.loading) {
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
      <div>
      <Header as='h2'>Picture Stories</Header>
      <Card.Group itemsPerRow={4}>
      {articles.map(function(article, index){
        return (
        <Card key={index}>
          <Image src={"http://localhost:8080/api/v1/demo/nodes/" + article.fields.images[Math.floor(Math.random()*article.fields.images.length)].uuid + "/binary/binary"} />
          <Card.Content>
            <Card.Header>
              <Link to={"/stories/" + article.uuid}>{article.fields.title}</Link>
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
        )
      })}
      </Card.Group></div>
    )
  }
}

export default compose(
  graphql(queries.getHome, {
    name: 'homeQuery'
  }),
)(Home)
