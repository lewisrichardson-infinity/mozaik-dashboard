import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import { ListenerMixin } from 'reflux'
import Mozaik from 'mozaik/browser'
import Promise from 'bluebird'

class People extends Component {
  constructor(props) {
    super(props)
  }

  getApiRequest() {
    return { id: 'infinitypeople.getStuff' }
  }

  onApiData(data) {
    this.setState({ count: data.count })
  }

  render() {
    return (
      <div>{count}</div>
    )
  }
}

reactMixin(People.prototype, ListenerMixin)
reactMixin(People.prototype, Mozaik.Mixin.ApiConsumer)

export default People