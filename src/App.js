import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ToDomain from './Components/ToDomain'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ToDomain} />
      </Switch>
    </Router>
  )
}

export default App;

