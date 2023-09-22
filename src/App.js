import {Switch, Route, Redirect} from 'react-router-dom'
import LoginRoute from './Component/Login'
import ProtectedRoute from './Component/ProtectedRoute'
import Home from './Component/Home'
import NotFound from './Component/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={LoginRoute} />
    <ProtectedRoute exact path="/" component={Home} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)
export default App
