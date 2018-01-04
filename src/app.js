import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Store from './store'
import { hot } from 'react-hot-loader'

@observer
class App extends Component {
  render () {
    console.log(this.props.store instanceof Store)

    return (
      <div>
        <h2>Welcome to {this.props.store.city}, Guillaume !</h2>
      </div>)
  }
}

export default hot(module)(App)
