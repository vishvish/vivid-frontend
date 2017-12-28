import React, { Component } from 'react'
import queries from './queries'
import { compose, graphql } from 'react-apollo'
import Chapter from './Chapter'
import ArticleImage from './ArticleImage'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

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
      console.log("Loading Article " + this.props.uuid)
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
      <div className="article">
        <h2>Article {this.props.uuid}</h2>
        <h3>{this.props.articleQuery.node.fields.title}</h3>
        <div className="chapters">
        {chapters.map(function(chapter, index){
          return <Chapter key={index} chapter={chapter} />
        })}
        </div>
        <div className="images">
        {images.map(function(img, index){
        return (
            <ArticleImage key={index} img={img} src={"http://localhost:8080/api/v1/demo/nodes/" + img.uuid + "/binary/binary"} />
        )
        })}
        </div>
      </div>
    );
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
)(Article);
