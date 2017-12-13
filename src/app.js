import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Store from './store'

@observer
class App extends Component {
  render () {
    console.log(this.props.store instanceof Store)

    return (
      <div>
        <h2>Welcome to {this.props.store.city}, Lola !</h2>
      </div>)
  }
}

export default App
