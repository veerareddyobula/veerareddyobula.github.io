import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LoginContainer    from './../containers/login/login-container'
import AdminHomeRouter   from './admin-home-router'
class AminRouter extends Component {
    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Route exact path="/admin/login"    component={LoginContainer} />
                    <Route exact path="/admin/allow/*"  component={AdminHomeRouter} />
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default AminRouter