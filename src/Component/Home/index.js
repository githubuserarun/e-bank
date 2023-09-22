import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Home = () => {
  const onLogout = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <div className="homeContainer">
      <div className="header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button className="logoutBtn" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
      <div className="homeBody">
        <h1 className="h1">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </div>
    </div>
  )
}
export default withRouter(Home)
