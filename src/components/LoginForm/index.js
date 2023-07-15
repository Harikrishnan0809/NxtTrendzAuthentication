// Write your JS code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  state = {userName: '', password: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  userNameInput = () => {
    const {userName} = this.state
    return (
      <div className="user-name-container">
        <label className="input-label" htmlFor="user-input">
          USERNAME
        </label>
        <input
          onChange={this.onChangeUserName}
          className="user-inputs"
          id="user-input"
          type="text"
          value={userName}
        />
      </div>
    )
  }

  passwordInput = () => {
    const {password} = this.state
    return (
      <div className="user-name-container">
        <label className="input-label" htmlFor="pw-input">
          PASSWORD
        </label>
        <input
          value={password}
          onChange={this.onChangePassword}
          className="user-inputs"
          id="pw-input"
          type="password"
        />
      </div>
    )
  }

  render() {
    return (
      <div className="login-bg-container">
        <img
          className="image-log-for-large"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <div className="box-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="nxt-logo-lg"
          />
          <img
            className="image-lg"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {this.userNameInput()} {this.passwordInput()}
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
