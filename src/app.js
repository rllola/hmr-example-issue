import React from 'react'
import Home from './home'
import Store from './store'
import { inject } from 'mobx-react'

const App = inject('store')((props) => {
  return (<Home city={props.store.city} />)
})

export default App
