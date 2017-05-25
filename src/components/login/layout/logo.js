import React from 'react'

import SignIn from './signbtn'
export default class Logo extends React.Component {
  render () {
    return (
      <div id ="centerLogin">
        <img src = {'src/img/logo.png'} id='logo'/>
         <img src = {'src/img/sign-in-button.png'} id='signIn'/>
      </div>
    )
  }
}
