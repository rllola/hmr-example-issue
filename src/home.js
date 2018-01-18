import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

class Home extends Component {
  render () {
    return (
      <div>
        <h2>Welcome to {this.props.city}, Bedeho !</h2>
      </div>)
  }
}

Home.propTypes = {
  city: PropTypes.string.isRequired
}

export default Home
