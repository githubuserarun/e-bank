import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginRoute extends Component {
  state = {userId: '', userPin: '', errorMsg: '', isError: false}

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({userPin: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    console.log('pass')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log('fail')
    this.setState({
      isError: true,
      errorMsg,
    })
  }

  onSubmit = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const userDetails = {user_id: userId, pin: userPin}
    const loginUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {isError, errorMsg} = this.state
    console.log(isError, errorMsg)

    return (
      <div className="loginRouteContainer">
        <div className="loginContainer">
          <div className="loginLeft">
            <img
              width="600px"
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png "
              alt="website login"
            />
          </div>
          <form className="loginRight" onSubmit={this.onSubmit}>
            <h1>Welcome Back!</h1>
            <div className="userInput">
              <label htmlFor="userName">User ID</label>
              <input
                id="userName"
                type="text"
                placeholder="Enter User Id"
                onChange={this.onChangeUserId}
              />
            </div>
            <div className="userInput">
              <label htmlFor="pin">PIN</label>
              <input
                id="pin"
                type="password"
                placeholder="Enter PIN"
                onChange={this.onChangeUserPin}
              />
              <button type="submit">Login</button>
              {isError && <p className="errmsg">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginRoute
