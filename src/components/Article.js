import React, { Component } from 'react'
import queries from './queries'
import { compose, graphql } from 'react-apollo'
import Chapter from './Chapter'
import ArticleImage from './ArticleImage'
import { Dimmer, Loader, Image, Segment, Header, Item } from 'semantic-ui-react'

class Article extends Component {

  constructor(props) {
    super(props)
    this.state = {uuid: this.props.uuid}
  }

  render() {
    if (this.props.articleQuery.loading) {
      // console.log("Loading Article " + this.props.uuid)
      return (
        <Segment>
        <Dimmer active>
        <Loader />
        </Dimmer>
        <Image src='/assets/images/wireframe/short-paragraph.png' />
        </Segment>
      )
    }

    if (this.props.articleQuery.error) {
      console.log(this.props.articleQuery.error)
      return (<div>An unexpected error occurred</div>)
    }

    var chapters = this.props.articleQuery.node.fields.chapters
    if(chapters === null) {
      chapters = []
    }

    var images = this.props.articleQuery.node.fields.images
    if(images === null) {
      images = []
    }

    return (
      <div>
        <Header as='h2'>
            {this.props.articleQuery.node.fields.title}
          <Header.Subheader>
            {this.props.articleQuery.node.fields.synopsis}
          </Header.Subheader>
        </Header>
        <Item.Group>
          {chapters.map(function(chapter, index){
            return <Chapter key={index} chapter={chapter} />
          })}
          <Image.Group>
          {images.map(function(img, index){
            return (
              <ArticleImage key={index} img={img} src={"http://localhost:8080/api/v1/demo/nodes/" + img.uuid + "/binary/binary"} />
            )
          })}
          </Image.Group>
        </Item.Group>
      </div>
    )
  }
}

export default compose(
  graphql(queries.getArticle, {
    name: 'articleQuery',
    options: (props) => ({
      variables: {
        uuid: props.uuid
      }
    }),
  })
)(Article)
