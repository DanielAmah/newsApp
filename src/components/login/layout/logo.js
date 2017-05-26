import React from 'react'

import SignIn from './signbtn'

import img from '../../../../public/img/logo.png'

import img2 from '../../../../public/img/sign-in-button.png'


export default class Logo extends React.Component {
  render () {
    return (
      <div id ="centerLogin">
        <img src = {img} id='logo'/>
         <img src = {img2} id='signIn'/>
      </div>
    )
  }
}
