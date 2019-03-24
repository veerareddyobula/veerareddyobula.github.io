import React, { Component, Fragment } from 'react'

import LoginComponent from './../../components/login/login-component'
import './login-container.css'

class LoginContainer extends Component {
    render() {
        return (
            <Fragment>
                <div className="login-container">
                    <LoginComponent />
                </div>
            </Fragment>
        )
    }
}

export default LoginContainer