import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/login/layout/layout'
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

render(Layout)
if (module.hot) {
  module.hot.accept('./components/login/layout/layout', () => { render(Layout) })
}