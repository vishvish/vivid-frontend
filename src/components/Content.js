import React, { Component } from 'react'
import Home from './Home'
import Page from './Page'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class Content extends Component {
  constructor(props) {
    super(props)
    this.updateArticle = this.updateArticle.bind(this)
  }

  updateArticle(e) {
    this.setState({articleUuid: e.target.id})
    console.log("Update Article " + e.target.id)
  }

  render() {
    return (
    <Router>
      <div>
        <Menu>
          <Menu.Item as={Link} to="/">Home
          </Menu.Item>
          <Menu.Item
            name='reviews'>
            Reviews
          </Menu.Item>
          <Menu.Item
            name='upcomingEvents'>
            Upcoming Events
          </Menu.Item>
        </Menu>
        <Route exact path="/" render={()=><Home page='home' />}/>
        <Route path="/stories/:uuid" render={(routeProps) => (
          <Page page='page' {...routeProps} />
        )}/>
      </div>
    </Router>
    )
  }
}

export default Content


