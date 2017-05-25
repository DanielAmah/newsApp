import React from 'react'

import Logo from './logo'
import Header from './header'
export default class Layout extends React.Component {
  render () {
    return (
      <div>
       <Header />
       <Logo />

      </div>
    )
  }
}
