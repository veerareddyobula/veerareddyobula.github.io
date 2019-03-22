import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <nav className="light-blue">
                <div className="nav-wrapper transparent">
                    <a href="#" className="brand-logo"></a>
                    <ul className="right hide-on-med-and-down">
                        <li className="hoverable"><a href="#">About Me</a></li>
                        <li className="hoverable"><a href="#">Education</a></li>
                        <li className="hoverable"><a href="#">Experience</a></li>
                        <li className="hoverable"><a href="#">Projects</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent;