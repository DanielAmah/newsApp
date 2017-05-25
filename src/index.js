import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/login/layout/header'
import './styles/app.scss'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(Header)
if (module.hot) {
  module.hot.accept('./components/login/layout/header', () => { render(Header) })
}