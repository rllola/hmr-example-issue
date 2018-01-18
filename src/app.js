import React from 'react'
import Home from './home'
import Store from './store'

const App = (props) => {
  console.log(props.store instanceof Store)
  console.log(store)
  return (<Home store={props.store} />)
}

export default App
