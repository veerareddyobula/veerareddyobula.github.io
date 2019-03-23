import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class BuildingBgQuoteComponent extends Component {
    render(){
        return(
            <div class="parallax-container center valign-wrapper">
                <div class="parallax">
                    <img 
                        alt="I love to do programming not because I get paid or get adulation by the public, but because it is fun to program." 
                        src="assets/parallax/full-stack-building-colors.jpeg?dpr=1&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=" />
                </div>

                <div class="container grey lighten-4">
                    <div className="d-flex justify-content-center m-4">
                        <h4>"</h4>
                        <h5>I love to do programming not because I get paid or get adulation by the public, but because it is fun to program.</h5>
                        <h4>"</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuildingBgQuoteComponent
