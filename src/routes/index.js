import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import HomeRouter from "./home"

const Root = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/home" component={HomeRouter} />
        </Switch>
      </Router>
    </>
  )
}

export default Root