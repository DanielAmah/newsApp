import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false
    };
    this.checkToken = this.checkToken.bind(this);
  }
  checkToken() {
    const Token =  localStorage.getItem('jwtToken');
    if (Token === 'user') {
      localStorage.setItem('jwtToken', 'no-user');
      window.location = '/#/';
      this.setState({
        token: false
      });
    } else {
      this.setState({
        token: true
      });
      alert('You can only sign out when you sign in');
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"><b>NEWS APP</b></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar">
             
                <ul className="nav navbar-nav navbar-right">
                  <li><a onClick={this.checkToken}>
                    <b>Log Out</b></a></li>
                </ul>
             
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
