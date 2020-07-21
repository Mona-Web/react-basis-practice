import React, { Component } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from '../components/router/Home'
import Detail from '../components/router/Detail'
import NotFound from '../components/NotFound'

export default class RouterTest extends Component {
  render() {
    return (
      <>
        {/* <BrowserRouter>
          <Link to="/home">home</Link>
          <Link to="/detail/test">detail</Link>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter> */}

        <HashRouter>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </HashRouter>
      </>
    )
  }
}
