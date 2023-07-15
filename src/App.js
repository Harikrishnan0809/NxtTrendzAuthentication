import {Switch, Route} from 'react-router-dom'
import Login from './components/LoginForm'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
