import React from 'react';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { credentials: {
      email: '',
      name: ''
    } };
    this.googleResponse = this.googleResponse.bind(this);
  }

  googleResponse(response) {
    const user = response.profileObj;
    if (response) {
      localStorage.setItem('jwtToken', 'user');
      this.setState({
        credentials: {
          email: user.email,
          name: user.name
        }
      });
      window.location = '/#/sources';
    } else {
      window.location = '/#/';
    }
  }
  render() {
    return (
      <div>
        <div className="loginBox">
        <form>
          <div className="text-center">
            <div className="text-center">
              <h1 className="page-header text-center"> GET NEWS</h1>
              <h4>Get News from different sources in the world</h4>
              <p>Sign in to get started</p>
            </div>
            <GoogleLogin
              clientId="723432734756-bvm7lq0v6gtg5d88vrg2aluqjd7o0lme.apps.googleusercontent.com"
              buttonText="Sign In"
              onSuccess={this.googleResponse}
              onFailure={this.googleResponse}
            ><i className="fa fa-google-plus" /></GoogleLogin>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
