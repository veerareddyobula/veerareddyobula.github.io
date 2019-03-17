import React, { Component, Fragment } from 'react'
import './label-section.css'

class LabelSection extends Component {

    render() {
        return (
            <Fragment>
                <div className="section-container">
                    <h1>Veera Reddy.Obula</h1>
                    <h3>Sr.FullStack Developer</h3>
                </div>
                <div className="parallax">
                    <img alt="Veera" src='/assets/parallax/bicycle_wall_sports_120826_3840x2400.jpg?dpr=1&auto=format&fit=crop&w=800&h=800&q=80&cs=tinysrgb&crop=' style={{ zIndex: '-1' }} />
                </div>
            </Fragment>
        )
    }
}

export default LabelSection