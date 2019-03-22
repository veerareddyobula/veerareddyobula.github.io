import React, {Component} from 'react'

class AboutmeComponent extends Component {
    render(){
        return(
            <div className="parallax-container center valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12 white-text">
                            <h2 className="teal-text teal-text lighten-2">Parallax Template</h2>
                            <p>A modern responsive front-end framework based on Material Design</p>
                            <a className="waves-effect waves-light btn-large teal lighten-2">Get Started</a>
                        </div>
                    </div>
                </div>
                <div className="parallax">
                    <img src="https://images.unsplash.com/photo-1429081172764-c0ee67ab9afd?dpr=1&auto=format&fit=crop&w=1500&h=927&q=80&cs=tinysrgb&crop=" />
                </div>
            </div>
        )
    }
}

export default AboutmeComponent